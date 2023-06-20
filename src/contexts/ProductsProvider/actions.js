import * as types from './types';

export const add_carinho = (dispatch, produto) =>{
    dispatch({ type: types.ADD_CARINHO, payload:produto });
}


