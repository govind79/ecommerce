 import mongoose from "mongoose";

//  const schema = mongoose.Schema;
 const productSchema =  mongoose.Schema({

    name:{
        type:String,
        required:[true,"please enter product name"],
        trim:true
        
    },
    description:{
        type:String,
        required:[true,"please enter product description"]
     },

    price:{
        type:Number,
        required:[true,"please enter product price"],
        maxLength:[8,"product cannot exceed 8 character"]
    },
    quentity:{
        type:Number,
        default:0

    },


     rating:{
        type:Number,
        default:0
     },

    //  images:[
    //     {
    //         public_id:{
    //         type:String,
    //         required:true

    //     },
    //     url:{
    //         type:String,
    //         required:true
    //     }
    // }
    //     ],

    // images:{
    
    //     // contentType:"image/jpg"
    //     type:String

    // },
        category:{
            type:String,
            required:[true,'please enter product category']
        },
    //     Stock:{
    //         type:Number,
    //         // required:true['please enter product category'],
    //         maxLength:[4,'stock cannot exceed 4 character'],
    //         default:1
    //     },
    //     noOfReview:{
    //         type:Number,
    //         default:0
    //     },
    //     reviews:[
    //         {
    //             name:{
    //                 type:String,
    //                 // required:true
    //             },
    //             rating:{
    //                 type:Number,
    //                 // required:true
    //             },
    //             comment:{
    //                 type:String,
    //                 // required:true
    //             }
    //         }
    //     ],
        createat:{
            type:Date,
            default:Date.now
        }
     

 });

 export default  mongoose.model("Product",productSchema);

