import { useReducer } from 'react';
import { ADD_BANKS, CLEAR_SEARCH, SEARCH_BANK, SET_LOADING } from '../types';
import BankContext from './BankContext';
import BankReducer from './BankReducer';

const BankState = (props) => {

    const initialState = {
        banks: [],
        filtered: null,
        loading: true
    }

    const [state, dispatch] = useReducer(BankReducer, initialState);

    const setLoading = (value) => {

        dispatch({
            type: SET_LOADING,
            payload: value
        })
    }

    const addBanks = (data) => {
        dispatch({
            type: ADD_BANKS,
            payload: data
        })
        setLoading(false);
    }

    const searchBanks = (query) => {
        dispatch({
            type: SEARCH_BANK,
            payload: query
        })
    }

    const clearFilter = () => {
        dispatch({
            type: CLEAR_SEARCH,
        })
    }

    return(
        <BankContext.Provider value={{
            banks: state.banks,
            filtered: state.filtered,
            loading: state.loading,
            addBanks,
            searchBanks,
            clearFilter
        }}
        >
            {props.children}
        </BankContext.Provider>
    )
}

export default BankState;