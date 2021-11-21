import glasshouse from '../images/glasshouse.jpg';
import apocalypto from '../images/apocalypto.jpg';
import pokedex from '../images/sitephoto.jpg';
import { Link } from "react-router-dom";
import '../styling/work.css';

const Work = () => {
    return (
        <section id="work">
            <div className="work-container">
                <Link to="/pokedex">
                    <img src={pokedex}/>
                    <h4>Pokedex</h4>
                    <p>CSS • JavaScript</p>
                </Link>
            </div>

            <div className="work-container">
                <Link to="/glasshouse">
                    <img src={glasshouse} />
                    <h4>Glasshouse</h4>
                    <p>CSS • JavaScript • React</p>
                </Link>
            </div>

            <div className="work-container">
                <Link to="/apocalypto">
                    <img src={apocalypto} />
                    <h4>Apocalypto</h4>
                    <p>Ruby</p>
                </Link>
            </div>
        </section>
    )
}

export default Work;