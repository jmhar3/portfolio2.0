import computer from '../images/computer.png';
import glasshouse from '../images/glasshouse.jpg';
import palette from '../images/palette page.jpg';
import pokedex from '../images/sitephoto.jpg';

const Work = () => {
    return (
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
    )
}

export default Work;