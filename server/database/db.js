import mongoose from 'mongoose';

export const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@e-commerce-web.35sls.mongodb.net/?retryWrites=true&w=majority&appName=e-commerce-web`;
    try {
        await mongoose.connect(URL, {
            //useUnifiedTopology: true,
            //useNewUrlParser: true
            serverSelectionTimeoutMS: 50000,
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error while connecting with the database:', error.message);
    }
};

export default Connection;
