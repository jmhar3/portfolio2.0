import heart from '../images/heart.png';
import globe from '../images/globe.png';
import computer from '../images/computer.png';

const About = () => {

    dragElement(document.getElementsByClassName("window"));

    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementsByClassName("window-header")) {
            document.getElementsByClassName("window-header").onmousedown = dragMouseDown;
        } else {
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    return (
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
    )
}

export default About;