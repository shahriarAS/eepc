import logo from './logo.svg';
import './App.css';
import NavBar from './components/root/NavBar';
import Footer from './components/root/Footer';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import SFHomepage from './components/Suffix&Prefix.jsx/SFHomepage';
import SFWordPage from './components/Suffix&Prefix.jsx/SFWordPage';
import PageNotFound from './components/root/PageNotFound';

function App() {


  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/suffix-prefix" exact component={SFHomepage} />
        <Route path="/suffix-prefix/:wordEndIn" exact component={SFWordPage} />
        <Route path="*" exact component={PageNotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
