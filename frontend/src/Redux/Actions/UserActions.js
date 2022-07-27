import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_UPDATE_FAIL, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS } from "../constants/UserConstants"
import axios from "../../axios.js"

export const login = (email,password) => async(dispatch)=>{
    try {
        const config = {
            headers:{
                "Content-type":"application/json",

            }

        }
   

        const {data} = await axios.post('/api/users/login',{
            email:email,
            password:password
        },config)

        dispatch({type:USER_LOGIN_SUCCESS,payload:data})
     
        localStorage.setItem("quinoteuser",JSON.stringify(data))
        

        
    } catch (error) {
        dispatch({
            type:USER_LOGIN_FAIL,
            payload:
            error.response && error.response.data.message ?
            error.response.data.message:error.message
        })
        
    }
}

export const logout = ()=>async (dispatch)=>{
    localStorage.removeItem("quinoteuser")
    dispatch({type:USER_LOGOUT})
}


export const register = (name,email,password) => async(dispatch)=>{
    try {

        dispatch({type:USER_REGISTER_REQUEST})
        const config = {
            headers:{
                "Content-type":"application/json"
            }
        }
   
        const {data} = await axios.post("/api/users",{name,email,password},config);

        // localStorage.setItem("quinoteuser",JSON.stringify(data))
        // setloading(false)
        // tool("/login")
        dispatch({type:USER_REGISTER_SUCCESS,payload:data})
        dispatch({type:USER_LOGIN_SUCCESS,payload:data})   
        localStorage.setItem("quinoteuser",JSON.stringify(data))     

     

        
    } catch (error) {
        alert("Invalid Data or You are already Registered Quinoter!")
        dispatch({
            type:USER_REGISTER_FAIL,
            payload:
            error.response && error.response.data.message ?
            error.response.data.message:error.message
        })
        
        
    }
}

export const updateProfileAction = (user)=>async(dispatch,getState)=>{
    try {
        dispatch({type:USER_UPDATE_REQUEST})
        const {
            userLogin :{quinoteuser}
        } = getState()

        const config = {
            headers:{
                "Content-Type":"application/json",
                Authorization:`bearer ${quinoteuser.token}`
            }
        }

        const {data} = axios.post("/api/users/profile",user,config)

        dispatch({type:USER_UPDATE_SUCCESS,payload:data})
        localStorage.setItem("quinoteuser",JSON.stringify(data))
        
    } catch (error) {
        dispatch({
            type: USER_UPDATE_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
        
    }
}