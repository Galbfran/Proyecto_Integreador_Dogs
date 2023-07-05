import { GET_DOGS , DOGS_DETAIL } from "./action-types";
import axios from 'axios'

export const getAllDogs = () => {
    return async (dispatch) => {
        let response = await axios('https://rickandmortyapi.com/api/character');
        return dispatch({ type: GET_DOGS , payload: response.data.results })//modificar despues para perros
    }
}