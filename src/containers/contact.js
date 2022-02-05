const Contact = () => {
 return (
  <section id="contact">
   <div className="row contact-title">
    <h3>Get In Touch</h3>
    <div className="strip contact-strip"></div>
   </div>
   <span className="contact-info row">
    <h4>0499833390</h4>
    •<a href="mailto:jmhar@protonmail.com">
     jmhar@protonmail.com
    </a>
   </span>

   <form id="contact_form" action="https://formkeep.com/f/8395fde77958"
    accept-charset="UTF-8"
    enctype="multipart/form-data"
    method="POST">
    <input type="text" id="Name" placeholder="Name" required />
    <input type="email" id="Email" placeholder="Email" required />
    <textarea id="Message" placeholder="Message" rows="6" maxlength="3000" required />
    <button type="submit" id="submit" style={{width: 'fit-content'}}>Send Message</button>
   </form>
  </section>
 )
}

export default Contact;