import React from 'react'
import { useAuth } from '../../context/auth';
import UserMenu from '../UserMenu';

export const UserDashboard = () => {
    const [auth,setAuth] = useAuth();
  return (
    <><h1 style={{textAlign:'center',background:'black',color:'white'}}>User Dashboard</h1>
    <div style={{height:'70vh',background:'black',color:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>
    <div style={{paddingTop:'50px',border:'4px solid white',width:'800px'}}>
    <h1 style={{textAlign:'center'}}>Name: {JSON.stringify(auth?.user?.name ,null,4)}</h1>
    <h1 style={{textAlign:'center'}}>Email: {JSON.stringify(auth?.user?.email ,null,4)}</h1>
    </div>
<UserMenu/>
    </div>
    </>
  )
}
export default UserDashboard;
