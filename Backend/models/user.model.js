import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import  Jwt  from "jsonwebtoken";
const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true,"please enter name "],
        minLength:[4,"name should have more than 4 character"],
        maxLength:[30,"name cannot be exceed 30 character"]
    },
    email:{
        type:String,
        required:[true,"please enter email"],
        unique:true,
        validate:[validator.isEmail,"please enter a valid email"]
    },
    password:{
        type:String,
        required:[true,"please enter password "],
        minLength:[8,"password should have more than 8 character"],
        select:false
    },
    cpassword:{
        type:String,
        required:[true,"please enter confirmpassword "],
        minLength:[8,"confirmpassword should have more than 8 character"],
        select:false
    },
    // avatar:{
        
    //         public_id:{
    //         type:String,
    //         required:true

    //     },
    //     url:{
    //         type:String,
    //         required:true
    //     }
 
    // },
    // role:{
    //     type:String,
    //     default:"user"
    // },
    // resetPasswordToken:{
    //     type:String
    // },
    // resetPasswordExpire:Date
});






export default  mongoose.model("User",userSchema);