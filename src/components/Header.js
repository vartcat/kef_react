import '../styles/header.css'
import Logo from '../../public/logoText_blackground.png'

export default function Header(){
    return(
        <header>
            <h1>Bienvenue chez KEF</h1>
            <img src={Logo} alt='logo KEF'></img>
        </header>
            )
}