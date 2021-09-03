import { BrowserRouter as Router, Route } from 'react-router-dom';
import Links from './containers/links';
import Nav from './containers/nav';
import About from './containers/about';
import Work from './containers/work'
import Contact from './containers/contact';
import './App.css';
import './styling/typography.css';
import './styling/about.css';
import './styling/contact.css';
import './styling/general.css';
import './styling/links.css';
import './styling/nav.css';
import './styling/compatibility.css';

function App() {
  return (
    <Router>
        <Links />
        <Nav />
        <Route exact path="/" component={About} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
