import React from "react";

function Footer(){
    return(
<div style={{background:'black', padding:50,color:'white',display:'flex'}}>

<ul style={{marginRight:'10px'}}>
<a style={{color:"white"}} href="/">
    <li>Home</li>
    </a>
    <a style={{color:"white"}} href="/contact">
    <li>Contact US</li>
    </a>
    <a style={{color:"white"}} href="/about">
    <li>About Us</li>
    </a>
</ul>
<ul>
        <a style={{color:"white"}} href={process.env.PUBLIC_URL + "/login.html"}>
    <li>Login</li>
    </a>
    <a style={{color:"white"}} href={process.env.PUBLIC_URL + "/register.html"}>
    <li>Register</li>
    </a>
</ul>
<p style={{marginLeft:'500px'}}>© Gk-2023</p>
<a href="/">
<h1 style={{color:"blue",display:'inline-block',width:'200',marginLeft:'600px'}}> Gunj</h1>
    <h1 style={{color:"white", display:'inline-block'}}> esh</h1>
</a>

</div>


    );
}

export default Footer;