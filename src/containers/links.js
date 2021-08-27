import notebook from '../images/notebook.png'
import mail from '../images/email.png'

const Links = () => {

    return (
        <div id="links">
            <div class="container">
                <a href="https://github.com/jmhar3" target="_blank"><img src="./images/computer.png" /></a>
                <a href="https://github.com/jmhar3" target="_blank">
                    <p class="hover_icon">GitHub</p>
                </a>
            </div>
            <div class="container">
                <a href="https://medium.com/@jmhar" target="_blank">
                    <img src={notebook} />
                </a>
                <a href="https://medium.com/@jmhar" target="_blank">
                    <p class="hover_icon">My Blog</p>
                </a>
            </div>
            <div class="container">
                <a href="mailto:jmhar@protonmail.com" target="_blank">
                    <img src={mail} />
                </a>
                <a href="mailto:jmhar@protonmail.com" target="_blank">
                    <p class="hover_icon">E-Mail</p>
                </a>
            </div>
        </div>
    )
}

export default Links;