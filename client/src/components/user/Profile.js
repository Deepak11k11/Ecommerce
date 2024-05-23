import React from 'react'
import UserMenu from '../UserMenu'

const Profile = () => {
  return (
    <><h1 style={{textAlign:'center',background:'black',color:'white'}}>User Dashboard</h1>
    <div style={{height:'70vh',background:'black',color:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>
    <div style={{width:'800px'}}>
    <h1 style={{textAlign:'center'}}>Your Profile</h1>
    
    </div>
    <UserMenu/>
    </div>
    </>
  )
}

export default Profile