import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/actions/productActions';
import CardUser from './CardUser';


function User() {
  const products = useSelector(state=>state.productsReducers.products)
  const dispatch = useDispatch()
  // console.log(products)
  
  useEffect(()=>{
        dispatch (getAllProducts())
      },[]);
   
  
    return (
      <div>
  
  <h1> Beauty advisor</h1>
  {products.map( el=><CardUser product={el} key={el._id}/>)}

  
      </div>
    )
  }



export default User