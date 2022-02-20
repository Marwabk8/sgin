import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { editProduct } from '../redux/actions/productActions'
import ReactStars from "react-rating-stars-component";

function CardUser({product}) {
    // const rate= useSelector(state=>state.productsReducers.rate)
    const dispatch = useDispatch()
    const[star,setStar]= useState(product.rate)
 
    const ratingChanged = (newRating) => {
      setStar(newRating)
      console.log(newRating)
    };
    const handleUpdate=(e)=>{
   
      dispatch(editProduct(product._id,star))
   
  }
   
     return (
       <div>
   <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src="holder.js/100px180" />
     <Card.Body>
       <Card.Title>{product.name}</Card.Title>
       <h5> {product.type}</h5>
       <Card.Text>
         {product.description}
       </Card.Text>
       <ReactStars
       count={5}
       value= {star}  onChange= {ratingChanged}></ReactStars>
   
       <Button variant="primary" onClick={handleUpdate}>Edit Product </Button>
       <Button variant="secondary">delet</Button>{' '}

     </Card.Body>
    
   
   </Card>
   
   
   
       </div>
     )
   }


export default CardUser