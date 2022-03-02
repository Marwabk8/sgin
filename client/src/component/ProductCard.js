import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from 'react-redux';
import { updateRate } from '../redux/actions/productActions';


function ProductCard({ product }) {
  const star = useSelector(state => state.productsReducers.rate)
  const dispatch= useDispatch()
  const [x, setX]=useState(star)
  const rate = 0
  const ratingChanged = async (e)=>{
  setX(e.target.value)
  rate = (rate+x/2)
  dispatch(updateRate(product._id,{rate}))
  }
 



  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`/uploads/${product.imageUrl}`} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <h5> {product.type}</h5>
          <Card.Text>
            {product.description}
          </Card.Text>
          <ReactStars
            count={5}
            value={product.rate} onChange={ratingChanged}></ReactStars>

          <Button variant="primary">Go somewhere</Button>
        </Card.Body>


      </Card>



    </div>
  )
}

export default ProductCard