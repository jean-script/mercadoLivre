import { useReducer } from 'react'
import { ProdutosContext } from './context'
import { reducer } from './reducer'
import { data } from './data'

export const ProdutosProvider = ({ children })=>{

    const [produtosState, produtosDispatch ] = useReducer(reducer, data);

    return <ProdutosContext.Provider value={{ produtosState, produtosDispatch }} >{children}</ProdutosContext.Provider>
}
