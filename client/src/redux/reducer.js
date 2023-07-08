import { GET_DOGS , DOGS_DETAIL , CLEAN_DETAIL , GET_TEMPERAMENT} from "./action-types";

const initialState = {
    allDogs : [],
    dogsDetail : [],
    temperament: []
}

const reducer = (state = initialState , action ) => {
    switch(action.type){
        case GET_DOGS:
            return{
                ...state,
                allDogs : action.payload
            }
        case DOGS_DETAIL:
            return{
                ...state,
                dogsDetail : action.payload
            }
        case CLEAN_DETAIL:
            return{
                ...state,
                dogsDetail: {}
            }
        case GET_TEMPERAMENT:
            return{
                ...state,
                temperament: action.payload
            }
        default:
            return {...state}

    }
}

export default reducer;