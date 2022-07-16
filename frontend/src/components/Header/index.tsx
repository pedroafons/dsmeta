import logo from '../../assets/img/logo-purples.svg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                    <h1>Notify There!</h1>
                    <p>Desenvolvido por <a href="https://github.com/pedroafons">Pedro Leite</a>.</p>
            </div>
        </header>
    )
}

export default Header
