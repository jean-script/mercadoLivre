import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import './styles.css';

export default function Header(){
    return(
        <header className='header-container'>
            <h1 className='header-title'>Mercado livre</h1>
            <form className='header-form'>
                <input type='search' className='header-input' placeholder='Busque produtos e muito mais... ' name='seach-produtos' id='seach-produtos'/>
                <button type='submit' className='header-btn'>
                    <FiSearch color='#FFF' size={27}/>
                </button>
            </form>
            <nav className='header-nav'>
                <Link> Login </Link>
                <Link> Criar conta </Link>
                <Link> <AiOutlineShoppingCart size={25} color='#000'/> </Link>
            </nav>
        </header>
    )
}