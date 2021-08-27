const About = () => {
    return (
        <section id="about" className="window">
            <div className="window-header">
                <h3>About</h3>
            </div>
            <div className="window-body">
                <div id="about-banner">
                    <div id="name">
                        <h1>Jessica Harriman</h1>
                        <h2 id="about-label">Software Engineer in training</h2>
                    </div>
                    <div id="location">
                        <img src="./images/globe.png" />
                        <h4>Melbourne, Australia</h4>
                    </div>
                </div>

                <p>I'm currently an aspiring developer and designer studying at Academy xi. When I'm not hard at work I'm
                    cuddling my dog, playing video games or (more often than not) a bit of both.</p>
                <div id="tech">
                    <img src="./images/computer.png" />
                    <h4>Tech I've been working with:</h4>
                </div>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Firebase</li>
                    <li>GitHub</li>
                    <li>Chrome DevTools</li>
                </ul>
            </div>
        </section>
    )
}

export default About;