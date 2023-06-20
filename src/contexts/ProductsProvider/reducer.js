import * as types from './types';
import { data } from './data'

export const reducer = (state, action)=>{

    let { carinho } = data;

    switch (action.type) {
        case types.ADD_CARINHO:{


            return { ...state, carinho: action.payload }
        }
    
        default:
            return { ...state}
    }


}
