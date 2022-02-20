import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import {useSelector } from 'react-redux';
function ProductCard({product}) {
 const rate= useSelector(state=>state.productsReducers.rate)
 const[star,setStar]= useState('')

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
    value= {product.rate}  onChange= {(e)=>setStar(e.target.value)}></ReactStars>

    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
 

</Card>



    </div>
  )
}

export default ProductCard