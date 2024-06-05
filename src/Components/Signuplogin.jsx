import { useState } from "react";
import Swal from 'sweetalert2'




function Signuplogin(){

    const [state,setState] = useState("Signup");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [loginEmail,setLoginEmail] = useState("");
    const [loginPass,setLoginPass] = useState("");

    

    const [arr,setArr] = useState([]);

    function handleSubmit(){
        let obj = {
            name : name,
            email : email,
            password : password
        }
    
        setArr([...arr,obj]);

        
        
        if(obj.password == "")
        {
            Swal.fire("Please Enter Your Password");
        }
        if(obj.email == "")
        {
            Swal.fire("Please Enter Your Email");
        }
        if(obj.name == "")
        {
            Swal.fire("Please Enter Your Name");
        }
        
        if(obj.name == "" || obj.email == "" || obj.password == "")
        {
            setState("Signup");
        }
        else{
            Swal.fire({
                title: "Weldone...!",
                text: "You Are Register Successfully!",
                icon: "success"
              });
            setState("Login");
        }
            
    }

    console.log(arr);   

    function handleCheck(){
        let data = arr.filter((val)=>{
            return val.email == loginEmail && val.password == loginPass
        })
        console.log(data);

        if(data.length > 0)
            {
                Swal.fire({
                    title: "Weldone...!",
                    text: "You Are Login Successfully!",
                    icon: "success"
                  });

      
            }
            else{
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Email or Password Are Not Matched!",
                  });
            }
    }
    return(
        <div>
            {
                state == "Signup" ? <div>
                <div class="signup-container">
                    <div class="signup-form">
                    <h2>Sign Up</h2>
                    <input type="text" placeholder="Full Name" required onChange={(val)=>{setName(val.target.value)}} />
                    <input type="text" placeholder="Email" required onChange={(val)=>{setEmail(val.target.value)}}/>
                    <input type="password" placeholder="Password" required onChange={(val)=>{setPassword(val.target.value)}} />
                    <button onClick={handleSubmit}>Sign Up</button>
                    <p>Already An Account Yet ?? Please <span style={{color : "blue",cursor : "pointer"}}  onClick={()=>{setState("Login")}}>Login</span></p>
                    </div>
                </div>
                    
                </div> : 
                <div>
                                <div class="container">
            <div class="login-card">
                <div class="login-card-header">
                <h2>Login</h2>
                </div>
                <div class="login-card-body">
                
                    <div class="form-group">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required onChange={(val)=>{setLoginEmail(val.target.value)}} />
                    </div>
                    <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required onChange={(val)=>{setLoginPass(val.target.value)}} />
                    </div>
                    <button type="submit" class="login-btn" onClick={handleCheck}>Login</button>
                    <p style={{color : "blue",cursor : "pointer",textAlign : "center"}}  onClick={()=>{setState("Signup")}}>Create New Account</p>
                
                </div>
            </div>
            </div>
                </div> 
            }

            
            
        </div>
    )
}

export default Signuplogin;