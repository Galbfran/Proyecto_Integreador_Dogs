import { GET_DOGS , DOGS_DETAIL , CLEAN_DETAIL  , GET_TEMPERAMENT} from "./action-types";
import axios from 'axios'

export const getAllDogs = () => {
    return async (dispatch) => {
        let response = await axios.get('http://localhost:3001/dogs/');
        return dispatch({ type: GET_DOGS , payload: response.data })//modificar despues para perros
    }
}

export const detailDogs = (id) => {
    return async (dispatch) => {
        let response = await axios.get('http://localhost:3001/dogs/'+ id);
        return dispatch({ type: DOGS_DETAIL , payload: response.data })//modificar despues para perros
    }
}

export const cleanDetail = () => {
    return { type: CLEAN_DETAIL }
}

export const getTemperament = () => {
    return async (dispatch) => {
        let response = await axios.get('http://localhost:3001/temperaments');
        return dispatch({ type: GET_TEMPERAMENT , payload: response.data })//modificar despues para perros
    }
}
