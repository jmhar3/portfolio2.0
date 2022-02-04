import '../styling/work-links.css';
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const WorkLinks = () => {

 return (
  <container id="work-links">
   <Marquee gradient={false} pauseOnHover={true}>
    <Link to="/pokedex">Pokedex</Link>
    <Link to="/glasshouse">Glasshouse</Link>
    <Link to="/apocalypto">Apocalypto</Link>
    <Link to="/dreamjournal">DreamJournal</Link>
    <Link to="/pokedex">Pokedex</Link>
    <Link to="/glasshouse">Glasshouse</Link>
    <Link to="/apocalypto">Apocalypto</Link>
    <Link to="/dreamjournal">DreamJournal</Link>
    <Link to="/pokedex">Pokedex</Link>
    <Link to="/glasshouse">Glasshouse</Link>
    <Link to="/apocalypto">Apocalypto</Link>
    <Link to="/dreamjournal">DreamJournal</Link>
    <Link to="/pokedex">Pokedex</Link>
    <Link to="/glasshouse">Glasshouse</Link>
    <Link to="/apocalypto">Apocalypto</Link>
    <Link to="/dreamjournal">DreamJournal</Link>
   </Marquee>
  </container>
 )
}

export default WorkLinks;