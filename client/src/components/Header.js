import React from "react";
import {Link} from "react-router-dom";
import { useAuth } from "../context/auth";

function Header(){

    const [auth,setAuth]=useAuth();
    const handleLogout=()=>{
    
    setAuth({
        ...auth,
        user:null,
        token:"",
    })
    localStorage.removeItem('auth');
}
    return (
        
    <div style={{background:'black', height: '100px'}}> 
    <Link to="/">
    <h1 style={{color:"blue",display:'inline-block',width:'200'}}> Ecomme</h1>
    <h1 style={{color:"white", display:'inline-block'}}> rce</h1>
    </Link>
    <div style={{display:'inline-block', float:'right', padding:'30px'}}>
       
        <Link style={{marginRight:'20px', color:"white",}} to="/">Home </Link>
        <Link style={{marginRight:'20px', color:"white"}} to={`/dashboard/${auth?.user?.role===1 ?"admin":"user"}`}>Dashboard </Link>
        
        <Link style={{marginRight:'20px', color:"white"}} to="/about">About Us</Link>
        
        <Link style={{marginRight:'20px', color:"white"}} to="/contact">Contact Us</Link>
        
       {
        !auth.token ? ( <><Link style={{marginRight:'20px', color:"white"}} to="/login"> Login </Link>
        <Link style={{marginRight:'20px', color:"white"}} to="/register">Register </Link> </>)
        : 
        (<><Link style={{marginRight:'20px', color:"white"}} onClick={handleLogout} to="/login">Logout </Link></>)
    
       }
       
        <Link style={{marginRight:'20px', color:"white"}} to="/cart">Cart</Link>
       
        
    </div>
    </div>
    
);
}

export default Header;