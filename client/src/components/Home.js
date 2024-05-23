import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";



function Home() {
    const [auth,setAuth] = useAuth();
    return (
        <div>
        <pre>{JSON.stringify(auth,null,4)}</pre>
            <div style={{
                display: 'block',

                textAlign: 'center',
                justifyContent: 'center',
                height: '10vh'
            }}>
                <h1>Ecommerce</h1>
                <p>The best place to shop</p>
            </div>
            <br/>
            <br/>
       
<div style={{display:'flex'}}>

<div style={{paddingRight:'20px'}}>
<img src="https://media.istockphoto.com/id/1490616219/photo/portrait-of-handsome-young-man.webp?b=1&s=170667a&w=0&k=20&c=mGpQRe2EHXxXw-cDTESUFWTxnn3ORaOV3ncJYcNKFBA=" height={200} width={300}/> 
  <h1>Tailored Jeans</h1>
  <p className="price">$19.99</p>
  <p>Some text about the jeans..</p>
  <p><button>Add to Cart</button></p>
</div>
<div style={{paddingRight:'20px'}}>
<img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpcnRzfGVufDB8fDB8fHww" height={200} width={300}/> 
  <h1>Tailored Jeans</h1>
  <p className="price">$19.99</p>
  <p>Some text about the jeans..</p>
  <p><button>Add to Cart</button></p>
</div>
<div style={{paddingRight:'20px'}}>
<img src="https://images.unsplash.com/photo-1585123334904-845d60e97b29?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2hlc3xlbnwwfHwwfHx8MA%3D%3D" height={200} width={300}/> 
  <h1>Tailored Jeans</h1>
  <p className="price">$19.99</p>
  <p>Some text about the jeans..</p>
  <p><button>Add to Cart</button></p>
</div>

<div style={{paddingRight:'20px'}}>
<img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D" height={200} width={300}/> 
  <h1>Tailored Jeans</h1>
  <p className="price">$19.99</p>
  <p>Some text about the jeans..</p>
  <p><button>Add to Cart</button></p>
</div>

<div style={{paddingRight:'20px'}}>
<img src="https://images.unsplash.com/photo-1626497764746-6dc36546b388?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fHww" height={200} width={300}/> 
  <h1>Tailored Jeans</h1>
  <p className="price">$19.99</p>
  <p>Some text about the jeans..</p>
  <p><button>Add to Cart</button></p>
</div>


</div>










           
            <div style={{
                display: 'block',
                background: 'black',
                color: "white",
                textAlign: 'center',
                justifyContent: 'center',
                height: '60vh',
                marginTop:'50px'
            }}>
            <br/>
                <h1>Shop by Category</h1>
                <br/>
                <br/>
                <br/>

                <div style={{textAlign:'left',marginLeft:'10px',display:'flex'}}>
               
                <ul style={{paddingRight:'60px'}}>
                <h2>Mens</h2>
                <li>
                    Shirt
                </li>
                <li>
                    Watches
                </li>
                <li>
                    Pants
                </li>
</ul>


                <ul style={{paddingRight:'60px'}}>
                <h2>Women</h2>
                <li>
                    Shirt
                </li>
                <li>
                    Watches
                </li>
                <li>
                    Pants
                </li>
</ul>

<ul style={{paddingRight:'60px'}}>
                <h2>Festive Wear for Men</h2>
                <li>
                    Shirt
                </li>
                <li>
                    Watches
                </li>
                <li>
                    Pants
                </li>
</ul>

<ul style={{paddingRight:'60px'}}>
                <h2>Festive wear for Women</h2>
                <li>
                    Shirt
                </li>
                <li>
                    Watches
                </li>
                <li>
                    Pants
                </li>
</ul>

<ul style={{paddingRight:'60px'}}>
                <h2>Kids</h2>
                <li>
                    Shirt
                </li>
                <li>
                    Watches
                </li>
                <li>
                    Pants
                </li>
</ul>

<ul style={{paddingRight:'60px'}}>
                <h2>Party Wear</h2>
                <li>
                    Shirt
                </li>
                <li>
                    Watches
                </li>
                <li>
                    Pants
                </li>
</ul>


                </div>

            </div>


            <div style={{
                display: 'block',
                textAlign:'center',
                paddingTop:'150px',
                justifyContent: 'center',
                height: '50vh',
                background:'#F8DE7E'
            }}>
                <h1>Get 5% discount on every product</h1>
                <p>The best place to shop</p>
            </div>




            <div style={{
                display: 'block',
               background:'lightgray',
                color:'black',
                textAlign: 'center',
                justifyContent: 'center',
                height: '50vh'
            }}>

            <br/>
            <br/>
            <p>Email: xyz@abc.com</p>
            <p>Phone: 112233</p>
            <form>
            <label style={{background:"black",color:'white'}}>Write your message:
            <br/>
            <input type="text" />
            </label>
            </form>
            </div>
          


        </div>

    );
}

export default Home;