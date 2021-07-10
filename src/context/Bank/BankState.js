import { useReducer } from 'react';
import { ADD_BANKS, SET_LOADING } from '../types';
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

    return(
        <BankContext.Provider value={{
            banks: state.banks,
            filtered: state.filtered,
            loading: state.loading,
            addBanks
        }}
        >
            {props.children}
        </BankContext.Provider>
    )
}

export default BankState;