import mongoose from "mongoose";


const orderSchema = mongoose.Schema({
    shippingInfo:{

        address:{
            type:String,
            required:true

        },
        city:{
            type:String,
            required:true
        },
        state:{
            type:String,
            required:true
        },
        country:{
            type:String,
            required:true
        },
        pincode:{
            type:Number,
            required:true,
        },
        mobileno:{
            type:Number,
            required:true
        },
        orderItem:[
            {
                name:{
                    type:String,
                    required:true
                },
                price:{
                    type:Number,
                    required:true
                },
                quentity:{
                    type:Number,
                },
                image:{
                    type:String,
                    required:true
                },
                product:{
                    type:mongoose.Schema.ObjectId,
                    ref:"product",
                    required:true
                }

            }
        ],
        user:{
            type:mongoose.Schema.ObjectId,
                    ref:"user",
                    required:true

        },
        paymentInfo:{
            id:{
                type:String,
                required:true
            },
            status:{
                type:String,
                required:true
            },
            paidAt:{
                type:Date,
                required:true
            },
            itemsPrice:{
                type:Number,
                required:true,
                default:0

            },
            taxPrice:{
                type:Number,
                required:true,
                default:0

            },
            
            shippingPrice:{
                type:Number,
                required:true,
                default:0

            },totalPrice:{
                type:Number,
                required:true,
                default:0

            },
            orderStatus:{
                type:String,
                required:true,
                default:'processing'

        },
        deliveredAt:Date,
        createdAt:{
            type:Date,
            default:Date.now
        }
        }

    }
})

const orders= mongoose.model('order',orderSchema);

 export default orders;