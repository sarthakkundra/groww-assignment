import { ADD_BANKS, SET_LOADING } from '../types';

const reducer = (state, action) => {

    switch(action.type){

        case ADD_BANKS:
            return{
                ...state,
                banks: action.payload
            }

        case SET_LOADING:
            return{
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}

export default reducer;