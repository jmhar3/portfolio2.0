import email from '../images/email.png'

const Contact = () => {
    return (
        <section id="contact" className="window">
            <div className="window-header">
                <h3>Get In Touch</h3>
            </div>
            <div className="window-body">
                <ul id="email" class="contact_email">
                    <li><a href="mailto:jmhar@protonmail.com"><img src={email} /></a></li>
                    <li><a href="mailto:jmhar@protonmail.com">
                        <h4>jmhar@protonmail.com</h4>
                    </a></li>
                </ul>

                <div id="contact_form">
                    <form action="https://formkeep.com/f/8395fde77958"
                        accept-charset="UTF-8"
                        enctype="multipart/form-data"
                        method="POST">
                        <input type="text" id="Name" placeholder="Name" required />
                        <input type="email" id="Email" placeholder="Email" required />
                        <textarea id="Message" placeholder="Message" rows="6" maxlength="3000" required />
                        <button type="submit" id="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;