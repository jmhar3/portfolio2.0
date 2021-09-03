import { Link } from "react-router-dom";
import '../styling/nav.css';
import heart from '../images/heart.png'

const Nav = () => {
    return (
        <header id="menu">
            {/* <Link to="/"><img src={logo} /></Link> */}
            <ul>
                <li><Link to="/" class="menu_text">ABOUT</Link></li>
                <li><Link to="/work" class="menu_text">WORK</Link></li>
                <li><Link to="/contact" class="menu_text">CONTACT</Link></li>
            </ul>
            <div id="footer">
                <img src={heart}/>
                <p>Designed & developed by Jessica Harriman</p>
            </div>
        </header>
    )
}

export default Nav;