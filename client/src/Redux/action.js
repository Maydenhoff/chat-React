import axios from "axios";
import { ERROR, LOGIN_USER, RESET_ERROR } from "./action-type";

const REACT_APP_URI = import.meta.env.VITE_URI

export const loginUser = (user) => {
    console.log("llegue");
    console.log(REACT_APP_URI);
    const endpoint = `${REACT_APP_URI}/user/login`
    return async(dispatch) => {
        try {
            console.log("user", user);
            const {data} = await axios.post(endpoint, user)
            console.log("despues del axios", data.response);
            if (data) {
                return dispatch ({
                    type: LOGIN_USER,
                    payload: data
                })
                
            } 
        } catch (error) {

            return dispatch ({
                type: ERROR,
                payload:error.response.data.message 
            })
        }
    }
    

}

export const resetError = () => {
    return {
        type: RESET_ERROR,
        payload: null
    }
}

export const createUser = (user) => {
    const endpoint = `${REACT_APP_URI}/user/create`
    return async(dispatch) => {
        try {
            const {data} = await axios.post(endpoint, user)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
}