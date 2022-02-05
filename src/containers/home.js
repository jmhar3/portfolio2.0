import globe from '../images/globe.png';
import mainImage from '../images/programmer.png';
import Typewriter from 'typewriter-effect';

const Home = () => {
 function scrollToProjects() {
  document.getElementById('work').scrollIntoView()
 }

 return (
  <section id="about">
   <div className="column about-container">
    <div className="strip about-top"></div>
    <div className="row">
     <div className="strip about-left"></div>
     <div class="about-info">
      <div id="name">
       <h2 id="about-label">Software Engineer</h2>
      <h1><Typewriter
        onInit={(typewriter) => {
         typewriter.typeString("Hi, my name's Jessica Harriman")
          .start();
        }}
       /></h1>
      </div>
      <div id="location">
       <img src={globe} />
       <h4>Melbourne, Australia</h4>
      </div>

      <p className="about">Welcome to my portfolio. I'm a Software Developer and UI designer currently working at HealthAide. When I'm not hard at work I'm cuddling with my dog, playing video games or (more often than not) a bit of both. In my off time I enjoy building and creating in many ways, from Lego and puzzles to coding my own fun little projects.</p>

      <p className="tech">HTML • CSS • JavaScript • React • Redux • Ruby • Rails • Node • Express • Next • PostgreSQL • Mongo</p>
     </div>
    </div>
    <div className="strip about-bottom"></div>
   </div>
   <div class="image-container">
    <img src={mainImage} id="main-image" />
   </div>
  </section>
 )
}

export default Home;