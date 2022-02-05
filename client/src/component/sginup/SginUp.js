
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sginup } from '../../redux/actions/authActions';

import "./Sginup.css"


function SginUp() {
 const[email,setEmail]= useState('')
 const[password,setPassword]= useState('')

 const dispatch = useDispatch()


  return (

    <div className="container">
      <div className="left">
        <h1>Hello</h1>
        <h1> Aleraday an account</h1>
        <button type="button">SIGN In</button>
      </div>
      <div className="right">
        <div className="title"> <h1>Sign Up</h1> </div>
        <form>
          <label>Your email</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email"  name placeholder="email" />
          <label>Password</label>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name placeholder="password" />
          <button onClick={()=>dispatch(sginup(email,password))} type="button">SIGN Up</button>
        </form>
      </div>
    </div>
  );
}



export default SginUp;
