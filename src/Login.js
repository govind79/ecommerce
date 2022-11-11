
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import Footer from "./Footer";

function Login() {
    const notify = () => toast.success("login sucessfully ");

    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");

    // const history = useHistory();
    let navigate = useNavigate();

    // useEffect(()=>{
    //     if(localStorage.getItem('user-info')){
            
    //     }

    // },[])

    // ======api integration=============//

//     var data = new FormData();
// // data.append(email:"email")
// // data.append(password:"password")

useEffect(()=>{
    handlelogin();
    // navigate("/")
    

},[])

   const handlelogin =()=>{

    console.log(email,password)

//     const data = JSON.stringify({
//         email: email,
//         password: password,
        
 
//    });

const token = localStorage.getItem("token");

console.log(token,"iuguy");

    var formdata = new FormData();
    formdata.append("email",email)
    formdata.append("password",password)
    
    var config = {
        method: 'post',
        url: 'http://localhost:8081/login',
        headers: { 
          'Content-Type': 'application/json',
          "Accept": 'application/json',
        //   ...data.getHeaders()
        },
        data : formdata
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
    
        // localStorage.setItem("user-info",(JSON.stringify(response.data)))
        // console.log(localStorage.setItem(),"token")
        notify();
      })
      .catch(function (error) {
        console.log(error);
      });

   }


    return (
        <div className="login-container">
        <Header/>
            <div class="account section">
                <div class="container mt-5">
                <div class="row justify-content-center">
                    <div class="col-lg-5">
                    <div class="login-form border p-4">
                        <div class="text-center heading">
                        <h2 class="mb-2">Login</h2>
                        <p class="lead">Don’t have an account? <Link to="/signup">Create a free account</Link></p>
                        </div>
            
                        <form action="#">
                        <div class="form-group mb-4">
                            <label for="#">Enter Email</label>
                            <input type="text" class="form-control" value={email} onChange={(e=>{setEmail(e.target.value)})} placeholder="Enter  Email"/>
                        </div>
                        <div class="form-group">
                            <label for="#">Enter Password</label>
                            <Link to="/forgot-password">Forgot password?</Link>
                            {/* <a class="float-right" href="">Forget password?</a> */}
                            <input type="password" class="form-control"  value={password} onChange={(e=>{setPassword(e.target.value)})} placeholder="Enter Password" /> 
                        </div>
                        <ToastContainer />
                
                        <Button onClick={()=>handlelogin} variant="primary">Login</Button>
                 
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Login