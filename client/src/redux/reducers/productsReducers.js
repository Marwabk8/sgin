import { EDITPRODUCT, GET_ALL_PRODUCTS } from "../types/productTypes";


const initstate =
{
products:[],
loading: true,


};

const productsReducers= (state= initstate,{type,payload}) =>{
    switch (type) {
        case GET_ALL_PRODUCTS:
        return{...state,products:payload,loading:false}
        // case EDITPRODUCT:
        // return{...state,rate:true }

  default: 
  return state;
    

    }   }
    
     export default productsReducers