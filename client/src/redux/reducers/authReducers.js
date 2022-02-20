import { CLEARERRORS, FAIL, GET_CURRENT, LOGOUT, SGININ, SGINUP } from "../types/authTypes"

const intialState = {
 user:{},
 auth:false,
 errors:[]
}

const authReducers =(state=intialState,action)=>{

switch (action.type) {
    case SGINUP:
    case SGININ:
        localStorage.setItem('token',action.payload.token)
       return {...state, user:action.payload.user, auth:true}
    case FAIL:
      return{...state, errors:action.payload.errors, auth:false}   

      case GET_CURRENT:
        return{...state, user:action.payload, auth:true}

     case LOGOUT:
       localStorage.removeItem('token')
       return{...state,auth: false, user:null}
        
      case CLEARERRORS:
        return {...state,errors:[]}
    default:
       
} return state


   
}

export default authReducers