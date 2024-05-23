import React from 'react'
import UserMenu from '../UserMenu'

const Orders = () => {
  return (
    <><h1 style={{textAlign:'center',background:'black',color:'white'}}>User Dashboard</h1>
    <div style={{height:'70vh',background:'black',color:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>
    <div style={{width:'800px'}}>
    <h1 style={{textAlign:'center'}}>Orders</h1>
    
    </div>
    <UserMenu/>
    </div>
    </>
  )
}

export default Orders