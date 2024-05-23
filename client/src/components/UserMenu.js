import React from 'react'
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
  return (
    <>
<div className="list-group" style={{width:'300px',paddingLeft:'50px'}}>
  <NavLink to="/dashboard/user/profile" className="list-group-item list-group-item-action">Profile</NavLink>
  <NavLink to="/dashboard/user/orders" className="list-group-item list-group-item-action">Orders</NavLink> 
</div>
    </>
  )
}

export default UserMenu;