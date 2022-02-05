import { FAIL, SGINUP } from "../types/authTypes"

const intialState = {
 user:{},
 auth:false,
 errors:[]
}

const authReducers =(state=intialState,action)=>{

switch (action.type) {
    case SGINUP:
        localStorage.setItem('token',action.payload.token)
       return {...state, user:action.payload.user, auth:true}
    case FAIL:
      return{...state, errors:action.payload.errors, auth:false}   
        

    default:
       
} return state


   
}

export default authReducers