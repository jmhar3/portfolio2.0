import Links from './containers/links';
import Nav from './containers/nav';
import Homepage from './containers/homepage';
import About from './containers/about';
import Blog from './containers/blog';
import Contact from './containers/contact'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styling/typography.css'

function App() {
  return (
    <Router basename="/portfolio">
        <Links />
        <Nav />
        <Route path="/" component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
