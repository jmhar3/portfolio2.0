import heart from '../images/heart.png';
import globe from '../images/globe.png';
import email from '../images/email.png';
import computer from '../images/computer.png';
import glasshouse from '../images/glasshouse.jpg';
import palette from '../images/palette page.jpg';
import pokedex from '../images/sitephoto.jpg';

const Home = () => {
    return (
        <div>
            <section id="about" className="window">
                <div className="window-header">
                    <img src={heart} />
                    <h3 className="window-title">About</h3>
                </div>
                <div className="window-body">
                    <div id="about-banner">
                        <div id="name">
                            <h1>Jessica Harriman</h1>
                            <h2 id="about-label">Software Engineer + UI Designer</h2>
                        </div>
                        <div id="location">
                            <img src={globe} />
                            <h4>Melbourne, Australia</h4>
                        </div>
                    </div>

                    <p>Welcome to my portfolio. I'm an aspiring software developer and UI designer, currently studying at Academy xi. When I'm not hard at work I'm
                        cuddling with my dog, playing video games or (more often than not) a bit of both.</p>
                    <div>
                        <span id="tech-head">
                            <img src={computer} />
                            <h4>Tech I've been working with:</h4>
                        </span>
                        <span id="tech-body">
                            <div>
                                <h5>Languages</h5>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>Ruby</li>
                                    <li>SQLite</li>
                                </ul>
                            </div>
                            <div>
                                <h5>Technologies</h5>
                                <ul>
                                    <li>Firebase</li>
                                    <li>GitHub</li>
                                    <li>Chrome DevTools</li>
                                </ul>
                            </div>
                        </span>
                    </div>
                </div>
            </section>
            
            <section id="work" className="window">
                <div className="window-header">
                    <img src={computer} />
                    <h3>Work</h3>
                </div>
                <div className="window-body">
                    <h3>Explore my creations:</h3>

                    <h4>Pokedex</h4>
                    <p>I created the Pokedex to display and develop my JavaScript skills</p>
                    <a href="https://jmhar3.github.io/pokedex/index.html" target="_blank">
                        <img src={pokedex} className="work" />
                    </a>

                    <h4>Glasshouse</h4>
                    <p>I created Glasshouse to display and develop my understanding in React and Firebase</p>
                    <a href="https://jmhar3.github.io/glasshouse" target="_blank">
                        <img src={glasshouse} className="work" />
                    </a>
                    <a href="https://jmhar3.github.io/glasshouse" target="_blank">
                        <img src={palette} className="work" />
                    </a>
                </div>
            </section>

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
        </div>
    )
}

export default Home;