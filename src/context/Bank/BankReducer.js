import { ADD_BANKS } from '../types';

const reducer = (state, action) => {

    switch(action.type){

        case ADD_BANKS:
            console.log("Reducer called")
            return{
                ...state,
                banks: [...state.banks, ...action.payload]
            }
        default:
            return state
    }
}

export default reducer;