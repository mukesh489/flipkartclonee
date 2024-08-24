import Product from '../model/product-schema.js';

export const getProducts = async (request, response) => {
    try {
        const products = await Product.find({});  // Fetch all products from the database
        response.status(200).json(products);      // Send the products as a JSON response
    } catch (error) {
        response.status(500).json({ message: error.message });  // Handle any errors
    }
};
