import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import { deleteProduct,  getOneProduct,  toggleTrue, updateRate } from '../redux/actions/productActions'
import ReactStars from "react-rating-stars-component";
import { useNavigate } from 'react-router';


function CardUser({product}) {
  
    const dispatch = useDispatch()
    const star = useSelector(state => state.productsReducers.rate) 
    const [x, setX]=useState(star)
  const rate = 0
  const ratingChanged = async (e)=>{
  setX(e.target.value)
  rate = (rate+x/2)
  dispatch(updateRate(product._id,{rate}))
  }
 
    
const navigate= useNavigate()
const handeleDelete =()=>{
  if(window.confirm("Are you sure"))
  dispatch(deleteProduct(product._id));
};
   
     return (
       <div>
   <Card style={{ width: '18rem' }}>


     <Card.Body>
       <Card.Title>{product.name}</Card.Title>
       <h5> {product.type}</h5>
       <Card.Text>
         {product.description}
       </Card.Text>
       <ReactStars
       count={5}
       value= {product.rate}  onChange= {ratingChanged}></ReactStars>
   
       <Button variant="info" onClick={()=>{dispatch(getOneProduct(product._id));dispatch(toggleTrue());navigate('/addEditProduct')}}>Edit Product </Button>
       <Button variant="danger" onClick={handeleDelete}>Delete</Button>

     </Card.Body>
     
    
   
   </Card>
   
   
   
       </div>
     )
   }


export default CardUser