const mongoose=require('mongoose')
const {Schema}=require('mongoose')
const productsModal=new Schema({
    userId:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
})

const Products = mongoose.model("products", productsModal);

module.exports=Products