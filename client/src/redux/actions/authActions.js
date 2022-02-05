import axios from "axios"
import { FAIL, SGINUP } from "../types/authTypes"

export const sginup=(data)=>async(dispatch)=>{
    try {
    const res = await axios.post('/auth/Sginup',data)
    
    dispatch({type:SGINUP, payload: res.data })
        
    } catch (error) {
        dispatch({type:FAIL, payload:error.response.data})
    }


}
