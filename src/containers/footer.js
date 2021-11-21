import { Link } from "react-router-dom";
import '../styling/footer.css';
import heart from '../images/heart.png'

const Footer = () => {
    return (
        <footer>
            <img src={heart}/>
            <p>Designed & developed by Jessica Harriman</p>
        </footer>
    )
}

export default Footer;