import { GET_DOGS , DOGS_DETAIL , CLEAN_DETAIL } from "./action-types";
import axios from 'axios'

export const getAllDogs = () => {
    return async (dispatch) => {
        let response = await axios('http://localhost:3001/dogs/');
        console.log(response.data + 'console action')
        return dispatch({ type: GET_DOGS , payload: response.data })//modificar despues para perros
    }
}

export const detailDogs = (id) => {
    return async (dispatch) => {
        let response = await axios('http://localhost:3001/dogs/'+ id);
        return dispatch({ type: DOGS_DETAIL , payload: response.data })//modificar despues para perros
    }
}

export const cleanDetail = () => {
    return { type: CLEAN_DETAIL }
}