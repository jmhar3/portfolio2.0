import { BrowserRouter as Router, Route } from 'react-router-dom';
import Links from './containers/links';
import WorkLinks from './containers/work_links';
import Nav from './containers/nav';
import Footer from './containers/footer';
import Home from './containers/home';
import Work from './containers/work';
import Contact from './containers/contact';
import './App.css';
import './styling/typography.css';
import './styling/home.css';
import './styling/contact.css';
import './styling/general.css';
import './styling/links.css';
import './styling/work-links.css';
import './styling/nav.css';
import './styling/compatibility.css';
import './styling/footer.css';

function App() {
  return (
    <Router>
        <Links />
        <Nav />
        <main>
          <Home />
          <Route path="/pokedex"
            render={() => window.location = "https://github.com/jmhar3/pokedex"} />
          <Route path="/glasshouse"
            render={() => window.location = "https://github.com/jmhar3/glasshouse"} />
          <Route path="/apocalypto"
            render={() => window.location = "https://github.com/jmhar3/apocalypto"} />
            <Route path="/dreamjournal"
              render={() => window.location = "https://github.com/jmhar3/dream_journal"} />
          <Work />
          <Contact />
        </main>
        <WorkLinks />
        <Footer />
    </Router>
  );
}

export default App;
