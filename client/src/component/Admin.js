import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllStore } from '../redux/actions/storeActions'
import{getAllProducts} from'../redux/actions/productActions'
import StoreCard from './StoreCard'
import CardUser from'./CardUser'

function Admin() {
 const stores = useSelector(state=>state.storeReducers.stores)
 const dispatch = useDispatch()
 useEffect (()=>{
   dispatch (getAllStore())
},[]);

const products = useSelector(state=>state.productsReducers.products)
  
  useEffect(()=>{
        dispatch (getAllProducts())
      },[]);


  return (
    <div>
 <h3>liste des boutiques</h3>
 {stores.map(el=><StoreCard store ={el} key={el._id}/>)}
 <h3>liste des produits </h3>
 {products.map( el=><CardUser product={el} key={el._id}/>)}


    </div>
  )
}

export default Admin