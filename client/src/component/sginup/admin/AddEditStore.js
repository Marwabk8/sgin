import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addStore } from '../../../redux/actions/storeActions'


function AddEditStore() {
 
    const[formData,setFormData]=useState({name:"",adresse:"",tel:0})
    const dispatch= useDispatch()
    const stores = useSelector(state=>state.storeReducers.stores)
    
    
    const handleAdd=(e)=>{
        e.preventDefault();
        dispatch(addStore(formData));
        navigate('/boutique')
        };


        useEffect(()=>{
         setFormData ({name:"",adresse:"",tel:0})},[stores])

    
        


  return (
    <div>
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Boutique</Form.Label>
    <Form.Control type="" placeholder="" name="boutique" value={formData.name}  onChange={handleAdd}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Adresse</Form.Label>
    <Form.Control type="" placeholder="" name="adresse" value={formData.adresse} onChange={handleAdd}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>tel</Form.Label>
    <Form.Control type="" placeholder="" name="tel" value={formData.tel} onChange={handleAdd}/>
  </Form.Group>
 
  <Button variant="primary" type="submit" onClick={handleAdd}> </Button>
</Form>




    </div>
  )
}

export default AddEditStore