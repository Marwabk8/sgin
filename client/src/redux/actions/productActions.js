import axios from "axios";
import { GET_ALL_PRODUCTS} from "../types/productTypes";

export const  getAllProducts= ()=>async (dispatch) => {
    try {
    const res= await axios.get('/product/home');
    dispatch({
        type:GET_ALL_PRODUCTS,
         payload: res.data});
    } catch (error) {
        console.log (error);
        
    }


};

export const addProduct = formData => async dispatch => {

    try {
         await axios.post('/product',formData);
    dispatch(getAllProducts())
        
    } catch (error) {
        console.log (error);
    }
};



export const editProduct =(id, formData)=>async dispatch=>{
    try {
 await axios.put(`/product/p/${id}`, formData);
 dispatch(getAllProducts());

        
    } catch (error) {
        console.log(error);
    }
};

