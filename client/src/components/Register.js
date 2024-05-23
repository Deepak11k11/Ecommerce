import React, { useState } from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const Register = () => {

    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");


    const navigate=useNavigate();
const handleSubmit=async(e)=>
{
  e.preventDefault();
  try {
    const res =await axios.post("/api/v1/auth/register",{name,email,password});
    if (res.data.success)
    {
      navigate('/login');
    }
  } catch (error) {
    console.log(error)
  }
}

  return (
    <>
    <div style={{marginLeft:'500px'}}>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>FORM</title>
  <style dangerouslySetInnerHTML={{__html: "\n      body {\n        background-color: lightgray;\n        margin: 0%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 124vh;\n        width: 100vw;\n      }\n\n      form {\n        display: flex;\n        flex-direction: column;\n        height: 90vh;\n        border-radius: 5px;\n        width: 40vw;\n        background-color: white;\n        align-items: center;\n        justify-content: space-evenly;\n      }\n      form > h1 {\n        color: rgba(0, 0, 0, 0.644);\n        border-bottom: 1px solid rgba(0, 0, 0, 0.644);\n        width: 10vw;\n        text-align: center;\n        padding-bottom: 1vmax;\n        font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n      }\n      form > input {\n        padding: 1vmax;\n        width: 30vw;\n        outline: none;\n        font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\",\n          sans-serif;\n        font-size: 1.3vmax;\n        border: none;\n        border-bottom: 1px solid rgba(70, 70, 70, 0.5);\n      }\n      form > input[type=\"submit\"] {\n        width: 20vw;\n        border: none;\n        cursor: pointer;\n        background-color: black;\n        color: white;\n        font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\",\n          \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n        font-size: 1.4vmax;\n        transition: all 0.5s;\n      }\n      form > input[type=\"submit\"]:hover {\n        background-color: #c4342a;\n      }\n    " }} />
  <form onSubmit={handleSubmit} >
    <h1>REGISTER</h1>
    <input placeholder="Enter Your Name" type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} />
    <input placeholder="Enter Your Email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <input placeholder="Enter Your Password" type="password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <input type="submit" defaultValue="Register" />
  </form>
</div>

    </>
  )
}
