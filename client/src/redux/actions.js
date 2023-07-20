import { GET_DOGS , DOGS_DETAIL , CLEAN_DETAIL  , GET_TEMPERAMENT , CLEAN_DOGS , GET_DOGS_NAME} from "./action-types";
import dogsVacio from './dogsVacio'
import {unDogs , tempVacio} from './dogsVacio'
import axios from 'axios'

export const getAllDogs = () => {       //funcion que trae si no hay o server no esta activo devuelve un array con 8 dogs vacios
    return async (dispatch) => {
        try {
            let response = await axios.get('http://localhost:3001/dogs/');
            return dispatch({ type: GET_DOGS , payload: response.data })    // type indica la action a ejecutar payload pasa la info al estado global
        } catch (error) {
            return dispatch({ type: GET_DOGS , payload: dogsVacio })
        }
    }
}

export const detailDogs = (id) => {        // busca dog por id si no hay retorna un datalle vacio
    return async (dispatch) => {
        try {
            let response = await axios.get('http://localhost:3001/dogs/'+ id);
            return dispatch({ type: DOGS_DETAIL , payload: response?.data })
        } catch (error) {
            return dispatch({ type: DOGS_DETAIL , payload: unDogs })
        }
    }
}

export const cleanDetail = () => {      //funcion usada en el donmonte del conpomente detail limpia estado
    return { type: CLEAN_DETAIL }
}

export const getTemperament = () => {   //pide temperamentos
    return async (dispatch) => {
        try {
            let response = await axios.get('http://localhost:3001/temperaments');
            return dispatch({ type: GET_TEMPERAMENT , payload: response.data })//modificar despues para perros
        } catch (error) {
            return dispatch({ type: GET_TEMPERAMENT , payload: tempVacio })
        }
    }
}

export const cleanDogs = () => {    //limpia estado all dogs
    return { type: CLEAN_DOGS }
}

export const getDogsByName = (name) => {    //trae dogs por name
    return async (dispatch) => {
        try {
            const trimmedName = name.trim().toLowerCase();  //paso a minuscula
            let url;
            if (trimmedName) {
            url = `http://localhost:3001/dogs/?name=${trimmedName}`;     // si existe name busca dogs  que incluyan el string pasado
            } else {
            url = 'http://localhost:3001/dogs/';    //caso string "" trae todos los dogs 
            }
            let response = await axios.get(url);
            return dispatch({ type: GET_DOGS_NAME, payload: response.data });//
        } catch (error) {
            return dispatch({ type: ""});
        }
    };
};
