import './style/Header.css'
import Logo from '../assets/logo.webp'
import Relogio from './Relogio'
export default function Header(){
    const nome_do_site = "Site React"
    return(
        <header>
            <Relogio></Relogio>
            <h1>
                <img src={Logo} alt="" width={70}/>
                {nome_do_site}
            </h1>

            <nav className="menu">
                <a href="#">link1</a>
                <a href="#">link2</a>
                <a href="#">link3</a>
                <a href="#">link4</a>
            </nav>
        </header>
    )
}