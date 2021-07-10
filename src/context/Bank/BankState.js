import { useReducer } from 'react';
import { ADD_BANKS } from '../types';
import BankContext from './BankContext';
import BankReducer from './BankReducer';

const BankState = (props) => {

    const initialState = {
        banks: [],
        filtered: null
    }

    const [state, dispatch] = useReducer(BankReducer, initialState);

    const addBanks = (data) => {
        dispatch({
            type: ADD_BANKS,
            payload: data
        })
    }

    return(
        <BankContext.Provider value={{
            banks: state.banks,
            filtered: state.filtered,
            addBanks
        }}
        >
            {props.children}
        </BankContext.Provider>
    )
}

export default BankState;