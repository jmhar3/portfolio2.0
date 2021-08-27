import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <header id="menu">
            <Link to="/"><img src="./images/heart.png" /></Link>
            <Link to="/about" class="menu_text">ABOUT</Link>
            <Link to="/blog" class="menu_text">BLOG</Link>
            <Link to="/contact" class="menu_text">CONTACT</Link>
        </header>
    )
}

export default Nav;