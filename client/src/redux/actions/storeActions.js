import axios from "axios";
import { GET_ALL_STORE } from "../types/storeTypes";

 
 
 export const getAllStore=()=>async (dispatch) =>{
 try {
    const res= await axios.get('/store/stores');
    dispatch({
    type :GET_ALL_STORE,
    payload : res.data })
 } catch (error) {
 console.log (error);

     
 }
 };

export const addStore = formData => async dispatch =>{

try {
 await axios.post('/boutique',formData);
 dispatch(getAllStore())
   
} catch (error) {

   console.log (error);   
   
}



}

 export const editStore =(id, formData)=>async dispatch=>{
   try {
await axios.put(`/store/store/${id}`, formData);
dispatch(getAllStore());

       
   } catch (error) {
       console.log(error);
   }
};
