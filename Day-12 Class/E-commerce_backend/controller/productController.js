const Products = require("../model/ProductModel");

//add product

const addProduct = async (req, res) => {
  try {
    const newProduct = {
      name: req.body.name,
      cost: req.body.cost,
      description: req.body.description,
      imageSrc: req.body.imageSrc,
      categories: req.body.categories,
      ratings: req.body.ratings,
    };

   await Products.insertOne(newProduct);

   res.status(200).json({message:"Product added successfully"})
} catch (error) {
      res.status(500).json({message:"Failed to added Product"})
  }
};

//get product based On ID
//delete product details
//edit product Details
//get all products


module.exports=addProduct