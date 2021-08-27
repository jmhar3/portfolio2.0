import Links from './containers/links';
import Nav from './containers/nav';
import Homepage from './containers/homepage';
import About from './containers/about';
import Blog from './containers/blog';
import Contact from './containers/contact'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename="/portfolio">
        <Links />
        <Nav />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
