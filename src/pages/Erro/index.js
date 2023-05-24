import './erro.css'
import { Link } from 'react-router-dom'
function Erro(){
    return(
        <div className='not-found'>
            <h1 className="numero">404</h1>
            <h2 className='msg'>Ops... página não encontrada :/</h2>
            <Link to="/" className='go-home'>voltar para a página inicial</Link>
        </div>
    )
}

export default Erro;