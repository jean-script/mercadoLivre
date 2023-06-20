import './styles.css'

function Login(){
    return(
        <main className='login-container'>
            <div className='login-div'>
                <article className='login-info'>
                    <h1><strong>Digite seu e-mail e senha</strong></h1>
                </article>
                <form className='login-forms'>
                    <input type='text' placeholder='Digite seu email'/>
                    <input type='text' placeholder='Digite sua senha'/>

                    <button className='login-btn'>Entrar</button>
                </form>

            </div>
        </main>
    )
}

export default Login;