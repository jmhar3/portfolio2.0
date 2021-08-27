import { BrowserRouter as Router, Route } from 'react-router-dom';
import Links from './containers/links';
import Nav from './containers/nav';
import Homepage from './containers/homepage';
import About from './containers/about';
import Work from './containers/work'
import Blog from './containers/blog';
import Contact from './containers/contact';
import './App.css';
import './styling/typography.css';
import './styling/about.css';
import './styling/blog.css';
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
        <Route path="/" component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
