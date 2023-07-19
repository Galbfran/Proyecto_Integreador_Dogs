import { GET_DOGS , DOGS_DETAIL , CLEAN_DETAIL  , GET_TEMPERAMENT , CLEAN_DOGS , GET_DOGS_NAME} from "./action-types";
import dogsVacio from './dogsVacio'
import {unDogs , tempVacio} from './dogsVacio'
import axios from 'axios'

export const getAllDogs = () => {
    return async (dispatch) => {
        try {
            let response = await axios.get('http://localhost:3001/dogs/');
            return dispatch({ type: GET_DOGS , payload: response.data })
            
        } catch (error) {
            return dispatch({ type: GET_DOGS , payload: dogsVacio })
        }
        
    }
}

export const detailDogs = (id) => {
    return async (dispatch) => {
        try {
            let response = await axios.get('http://localhost:3001/dogs/'+ id);
            return dispatch({ type: DOGS_DETAIL , payload: response?.data })//modificar despues para perros
        } catch (error) {
            return dispatch({ type: DOGS_DETAIL , payload: unDogs })
        }
    }
}

export const cleanDetail = () => {
    return { type: CLEAN_DETAIL }
}

export const getTemperament = () => {
    return async (dispatch) => {
        try {
            let response = await axios.get('http://localhost:3001/temperaments');
            return dispatch({ type: GET_TEMPERAMENT , payload: response.data })//modificar despues para perros
        } catch (error) {
            return dispatch({ type: GET_TEMPERAMENT , payload: tempVacio })
        }
    }
}

export const cleanDogs = () => {
    return { type: CLEAN_DOGS }
}

export const getDogsByName = (name) => {
    return async (dispatch) => {
        try {
            const trimmedName = name.trim().toLowerCase();
            let url;
            if (trimmedName) {
            url = `http://localhost:3001/dogs/?name=${trimmedName}`;
            } else {
            url = 'http://localhost:3001/dogs/';
            }
            let response = await axios.get(url);
            return dispatch({ type: GET_DOGS_NAME, payload: response.data });
        } catch (error) {
            return dispatch({ type: ""});
        }
    };
};
