import { Link } from "react-router-dom";
import '../styling/nav.css';

const Nav = () => {
    return (
        <nav>
            <Link to="/" class="home-button">JH</Link>
            <Link to="/" class="contact-button">GET IN TOUCH</Link>
        </nav>
    )
}

export default Nav;