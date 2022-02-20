import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

function PrivateRoute({children}) {
 const token = localStorage.getItem('token')
 const auth = useSelector(state=>state.authReducers.auth)

  return <div>
{ token  ? children: <Navigate to= '/login'/>}



  </div>
}

export default PrivateRoute;
