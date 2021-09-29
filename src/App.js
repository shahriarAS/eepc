import logo from './logo.svg';
import './App.css';
import NavBar from './components/root/NavBar';
import Footer from './components/root/Footer';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';

function App() {


  return (
    <>
      <NavBar />
      <Switch>
        <Route to="/" exact component={HomePage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
