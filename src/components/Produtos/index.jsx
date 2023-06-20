import { useContext, useEffect, useState } from "react"
import { ProdutosContext } from '../../contexts/ProductsProvider/context'
import { add_carinho } from '../../contexts/ProductsProvider/actions'

import './styles.css';
export default function Produtos(){

    const produtosContext = useContext(ProdutosContext);
    const {produtosState, produtosDispatch} = produtosContext;
    const [produto, setProdutos] = useState([])
    const { produtos, carinho } = produtosState;
    
    useEffect(()=>{
        setProdutos(produtos);
    }, [produtos])

    console.log(carinho);

    return(
        <section className="produtos-container">
            <article className="produto-container">
                {produto.map(produto=>{
                    return(
                        <div key={produto.id} className="produto">
                            <p>{produto.title}</p>
                            <span>R$ {produto.preco}</span>
                            <div className="container-btn">
                                <button onClick={()=> add_carinho(produtosDispatch, produto)} className="produto-btn">
                                    +
                                </button>
                                <button className="produto-btn">
                                    -
                                </button>
                            </div>
                        </div>
                    )
                })}
            </article>
        </section>
    )
}
