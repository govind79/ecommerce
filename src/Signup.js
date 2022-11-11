 import { useState,useEffect } from "react"
 import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import Footer from "./Footer";

function SignUp() {
    const [username,setUsername]= useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const [cpassword,setCpassword]= useState("");
    const notify = () => toast("registration sucessfully ");

    let navigate = useNavigate();

    useEffect(()=>{
   
        handleSubmit();
     
        // if(localStorage.getItem('user-info')){
        //     navigate("/")
        // }
        
        

    },[])

    const handleSubmit = ()=>{

        const data = JSON.stringify({
            username:username,
                 email: email,
               password: password,
                cpassword: cpassword

          });
          
          const config = {
            method: 'post',
            url: 'http://localhost:8081/register',
            headers: { 
              'Content-Type': 'application/json',
              "Accept": 'application/json'
            },
            data : data
          };
        
          console.log(data, "register api ")
          axios(config)
          .then(function (response) {
            notify();
            // localStorage.setItem("user-info",(JSON.stringify(response.data)))
       
            navigate("/login");
          })
          .catch(function (error) {
            console.log(error);
          });

    }
    
    return (
        <div className="signUp-container">
        <Header/>
            <div class="account section">
                <div class="container mt-5">
                <div class="row justify-content-center">
                    <div class="col-lg-4">
                    <div class="login-form border p-4">
                        <div class="text-center heading">
                        <h2 class="mb-4">Sign Up</h2>
                        <p class="lead">Already have an account? 
                        <Link to="/login"> Login now</Link></p>
                        </div>
            
                        <form action="#">
                        <div class="form-group mb-4">
                            <label for="#">Enter username</label>
                            <input type="text" class="form-control" placeholder="Enter username" value={username}onChange={(e=>{setUsername(e.target.value)})} /> 
                            
                        </div>
                        <div class="form-group mb-4">
                            <label for="#">Enter email</label>
                            <Link to="/forgot-password">Forgot password?</Link>
                            {/* <a class="float-right" href="">Forget password?</a> */}
                            <input type="text" class="form-control" value={email} onChange={(e=>{setEmail(e.target.value)})} placeholder="Enter Email Address"/>
                        </div>
                        <div class="form-group mb-4">
                            <label for="#">Enter Password</label>
                            <input type="password" class="form-control" value={password} onChange={(e=>{setPassword(e.target.value)})} placeholder="Enter Password"/> 
                        </div>
                        <div class="form-group">
                            <label for="#">Confirm Password</label>
                            <input type="password" class="form-control" value={cpassword} onChange={(e=>{setCpassword(e.target.value)})} placeholder="Confirm Password" /> 
                        </div>
            
                        <Button onClick={handleSubmit} variant="primary">Primary</Button>
                        <ToastContainer/>
                     
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
export default SignUp