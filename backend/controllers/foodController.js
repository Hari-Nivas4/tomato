import foodModel from "../models/foodmodel.js";
import fs from "fs";

// add food items
const addFood = async (req, res) => {
    try {
        // 🔐 safety check
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Image is required"
            });
        }

        const image_filename = req.file.filename;

        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_filename
        });

        await food.save();

        res.status(200).json({
            success: true,
            message: "Food Added"
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Food Added error"
        });
    }
};

// all food names list
const listFood = async(req,res) =>{
    try{
        const food = await foodModel.find({})
        res.json({success:true,data:food})
    }catch(error){
        res.json({success:false , message:error});
    }
}
// remove food items 
const removeFood = async ( req,res) =>{
    try{
        const food = await foodModel.findById(req.body.id); 
        fs.unlink(`uploads/${food.image}` , ()=>{})
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"removed food success"});
    }catch(error){
        res.json({success:false,message:error});
    }
}
export { addFood , listFood , removeFood};
