import React from 'react'
import AdminMenu from '../AdminMenu'

const CreateProduct = () => {
  return (
    <><h1 style={{textAlign:'center',background:'black',color:'white'}}>Admin Dashboard</h1>
    <div style={{height:'70vh',background:'black',color:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>
    <div style={{width:'800px'}}>
    <h1 style={{textAlign:'center'}}>Create Product </h1>
    
    </div>
    <AdminMenu/>
    </div>
    </>
  )
}

export default CreateProduct