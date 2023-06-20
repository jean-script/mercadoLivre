import { TbCheckupList } from 'react-icons/tb'
import './styles.css'

function Register(){
    return(
        <main className='register-container'>
            <form className='register-forms'>
                <h1>
                    Cadastre-se
                    <TbCheckupList size={50}/>    
                </h1>
                <input type='text' placeholder='Digite seu nome'/>
                <input type='text' placeholder='Digite seu email'/>
                <input type='text' placeholder='Digite sua senha'/>

                <button className='register-btn'>Registar</button>
            </form>
        </main>
    )
}

export default Register;
