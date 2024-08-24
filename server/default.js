// import { products } from "./constant/data.js";
// import Product from "./model/product-schema.js";

// const DefaultData= ()=>{

//     try{
//          Product.insertMany(products);
//     }
//     catch(error){
//         console.log('error while inserting default data', error.message);

//     }




// }
// export default DefaultData;


import { products } from "./constant/data.js";
import Product from "./model/product-schema.js";

const DefaultData = async () => {
    try {
        await Product.deleteMany();
        await Product.insertMany(products);
        console.log('Default data inserted successfully');
    } catch (error) {
        console.error('Error while inserting default data:', error.message);
    }
}

export default DefaultData;
