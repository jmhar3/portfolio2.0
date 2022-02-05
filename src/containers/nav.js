import '../styling/nav.css';

const Nav = () => {
 function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
 }

 function scrollToContact() {
  document.getElementById('contact').scrollIntoView()
 }

 return (
  <nav>
   <button
    onClick={scrollToTop}
    class="home-button"
   >JH</button>
   <button
    onClick={scrollToContact}
    class="contact-button"
   >GET IN TOUCH</button>
  </nav>
 )
}

export default Nav;