import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch} from 'react-redux'
import { Navigate } from 'react-router'
import { getcurrent } from '../redux/actions/authActions'


function PostForm() {
// const product= useSelector(state=>state.productsReducers.products)

 const [imageUrl,setImageUrl]= useState(null)
 console.log(imageUrl)
 const [name,setName]= useState()
 const [type,setType]=useState()
 const[description,setDescription] = useState()
 const[rate,setRate] = useState()
 const[disponibilite,setDisponibilite]= useState()

 const dispatch = useDispatch()

 const postProduct = async ()=>{
 const config={
 headers : {
 authorization: localStorage.getItem('token')
 
 }
 
 }
 
 const data =new FormData()
 data.append('myProduct',imageUrl)
 data.append('name',name)
 data.append('type',type)
 data.append('description',description)
 data.append('rate',rate)
 data.append('disponibilite',disponibilite)
 try {
  await axios.post('/user/ajouter',data,config)
  dispatch (getcurrent())
 } catch (error) {
   console.log(error)
 }

 }

  return (
    <div>
<Form>
<Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Default file input example</Form.Label>
    <Form.Control type="file"  onChange={e=>setImageUrl(e.target.files[0])}/>
  </Form.Group>  
  <Form.Group className="mb-3" controlId="">
    <Form.Label>name</Form.Label>
    <Form.Control type="" placeholder="" name="name"  onChange={(e)=>setName(e.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="">
    <Form.Label>type</Form.Label>
    <Form.Control type="" placeholder="" name="type"  onChange={(e)=>setType(e.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="">
    <Form.Label>description</Form.Label>
    <Form.Control type="description" placeholder="" name="description" onChange={(e)=>setDescription(e.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="">
    <Form.Label>rate</Form.Label>
    <Form.Control type="rate" placeholder="" name="rate" onChange={(e)=>setRate(e.target.value)}/>
  </Form.Group>

<Form.Group className="mb-3" controlId="">
    <Form.Label>disponibilite</Form.Label>
    <Form.Control type=" disponibilite" placeholder="" name="disponibilite"onChange={(e)=>setDisponibilite(e.target.value)}/>
  </Form.Group>

  <Button variant="primary" type="submit" onClick={postProduct} > 
  Add </Button>
</Form>



    </div>
  )
}

export default PostForm