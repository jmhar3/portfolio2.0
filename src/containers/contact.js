import email from '../images/email.png'

const Contact = () => {
    return (
        <section id="contact" className="window">
            <div className="window-header">
                <img src={email} />
                <h3 className="window-title">Get In Touch</h3>
            </div>
            <div className="window-body">
                <span id="email" class="contact_email">
                <a href="mailto:jmhar@protonmail.com">
                jmhar @protonmail.com
                </a>
                </span>

                <form id="contact_form" action="https://formkeep.com/f/8395fde77958"
                accept-charset="UTF-8"
                enctype="multipart/form-data"
                method="POST">
                <input type ="text" id="Name" placeholder="Name" required />
                <input type ="email" id="Email" placeholder="Email" required />
                <textarea id="Message" placeholder="Message" rows="6" maxlength="3000" required />
                <button type ="submit" id="submit">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;