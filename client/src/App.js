import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Footer from './components/Footer';
import { Register } from './components/Register';
import UserDashboard from './components/user/UserDashboard';
import PrivateRoute from './components/Routes/Private';
import AdminRoute from './components/Routes/Admin';
import AdminDashboard from './components/admin/AdminDashboard';
import CreateProduct from './components/admin/CreateProduct.js';
import CreateCategory from './components/admin/CreateCategory.js';
import Users from './components/admin/Users.js';
import Profile from './components/user/Profile.js';
import Orders from './components/user/Orders.js';
import Cart from './components/Cart.js';

function App() {

  return (
<div>
<Router>
<Header/>

<Routes>
<Route exact path="/" element={<Home/>}/>  
<Route exact path="/about" element={<About/>}/> 
<Route exact path="/contact" element={<Contact/>}/>
<Route exact path="/login" element={<Login/>}/>
<Route exact path="/register" element={<Register/>}/>
<Route exact path="/dashboard" element={<PrivateRoute/>}>
  <Route exact path="user" element={<UserDashboard/>}/>
  <Route exact path="user/profile" element={<Profile/>}/>
  <Route exact path="user/orders" element={<Orders/>}/>
</Route>
<Route exact path="/dashboard" element={<AdminRoute/>}>
  <Route exact path="admin" element={<AdminDashboard/>}/>
  <Route exact path="admin/create-category" element={<CreateCategory/>}/>
  <Route exact path="admin/create-product" element={<CreateProduct/>}/>
  <Route exact path="admin/users" element={<Users/>}/>
</Route>  
<Route exact path="/cart" element={<Cart/>}/>  
</Routes>
<Footer/>
  </Router>
</div>
  );
}

export default App;
