import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: String,
    url: String,
    detailUrl: String,
    title: {
        shortTitle: String,
        longTitle: String
    },
    price: {
        mrp: Number,
        cost: Number,
        discount: String
    },
    quantity: Number,
    discount: String,
    description: String,
    tagline: String
});

const Product = mongoose.model('Product', productSchema);

export default Product;
