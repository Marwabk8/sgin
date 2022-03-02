import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllStore } from '../redux/actions/storeActions'
import{getAllProducts} from'../redux/actions/productActions'
import StoreCard from './StoreCard'
import CardUser from'./CardUser'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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
 <h3> stores list</h3>
 <Link to ='/addEdit'>
 <Button variant="dark">Add New Store</Button>{' '}
</Link>
  

 {stores.map(el=><StoreCard store ={el} key={el._id}/>)}
 <h3> Product list</h3>
 <Link to ='/addEditProduct'>
 <Button variant="dark">Add New product</Button>{' '}
</Link>

 {products.map( el=><CardUser product={el} key={el._id}/>)}


    </div>
  )
}

export default Admin