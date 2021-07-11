import { ADD_BANKS, CLEAR_SEARCH, SEARCH_BANK, SET_LOADING } from '../types';

const reducer = (state, action) => {

    switch(action.type){

        case ADD_BANKS:
            return{
                ...state,
                banks: action.payload
            }
        
        case SEARCH_BANK:
            console.log(`Payload ${action.payload}`)
            return{
                ...state,
                filtered: state.banks.filter((bank) => {
                    const regex = new RegExp(`${action.payload}`, "gi");
                    return bank.bank_name.match(regex) || bank.address.match(regex);
                })
            }

        case CLEAR_SEARCH:
            return{
                ...state,
                filtered: null
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