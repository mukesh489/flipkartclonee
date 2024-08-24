import User from "../model/user-schema.js";

export const userSignup = async (req, res) => {
    try {
        const { firstname, lastname, username, email, password, phone } = req.body;

        // Create a new user instance
        const newUser = new User({
            firstname,
            lastname,
            username,
            email,
            password,
            phone
        });

        // Save the new user to the database
        await newUser.save();

        // Send success response
        res.status(201).json({ message: "User signup successful!" });
    } catch (error) {
        // Log and send error response
        console.error("Error while signing up user:", error);
        res.status(500).json({ message: "Error while signing up user", error: error.message });
    }
};
export const userLogin = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find user by username and password
        const user = await User.findOne({ username, password });
        console.log('Found User:', user); // Log user object

        if (user) {
            return res.status(200).json({ success: true, data: user });
        } else {
            return res.status(401).json({ success: false, message: 'Invalid login credentials' });
        }
    } catch (error) {
        console.error("Error while logging in user:", error);
        return res.status(500).json({ success: false, message: "Error while logging in user", error: error.message });
    }
};


  