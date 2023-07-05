import { GET_DOGS } from "./action-types";

const initialState = {
    allDogs : [],
    dogsDetail : {}
}

const reducer = (state = initialState , action ) => {
    switch(action.type){
        case GET_DOGS:
            return{
                ...state,
                allDogs : action.payload
            }

        default:
            return {...state}

    }
}

export default reducer;