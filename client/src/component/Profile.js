
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getcurrent } from '../redux/actions/authActions';
import Admin from './Admin';
import User from './User';


function Profile() {
    const dispatch= useDispatch()   
 const user= useSelector(state=>state.authReducers.user);


 useEffect(()=>{dispatch(getcurrent())},[user])

  return (
  
  <div>

<h1> {user && user.role ? <Admin></Admin>: <User></User>} </h1>


  </div>)
}

export default Profile;
