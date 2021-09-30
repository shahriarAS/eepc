import './App.css';
import NavBar from './components/root/NavBar';
import Footer from './components/root/Footer';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import SFHomepage from './components/Suffix&Prefix.jsx/SFHomepage';
import SFWordPage from './components/Suffix&Prefix.jsx/SFWordPage';
import PageNotFound from './components/root/PageNotFound';
import { useEffect } from 'react';
import Dashboard from './components/AdminPage/Dashboard';
import LoginPage from './components/AdminPage/LoginPage';
import firebase from "./components/config/firebase"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";
import { useDispatch, useSelector } from 'react-redux';
import EEPCReducer from './components/redux/eepcReducer';
import LoadingPage from './components/root/LoadingPage';

function App() {

  const loading_status = useSelector(state => state.loading_status)
  const dispatch = useDispatch(EEPCReducer)

  const grabSFCategory = () => {

    const dbRef = ref(getDatabase());
    get(child(dbRef, "SFCategory/")).then((snapshot) => {
      if (snapshot.exists()) {
        dispatch({
          type: "populate_sfcategory",
          payload: snapshot.val()
        })
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  const grabSFData = () => {

    const dbRef = ref(getDatabase());
    get(child(dbRef, "SFData/")).then((snapshot) => {
      if (snapshot.exists()) {
        dispatch({
          type: "populate_sfdata",
          payload: snapshot.val()
        })
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  const grabCurrentUser = () => {

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        dispatch({
          type: "login",
          payload: uid
        })
      } else {
        console.log("User is signed out")
      }
      dispatch({
        type: "finish_loading"
      })
    });
  }

  useEffect(() => {
    grabSFCategory()
    grabSFData()
    grabCurrentUser()
  }, [])

  return (
    <>
      {
        loading_status === "loading" ? (
          <LoadingPage />
        ) : (
            <>
              <NavBar />
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/suffix-prefix" exact component={SFHomepage} />
                <Route path="/suffix-prefix/:wordEndIn/:title" exact component={SFWordPage} />
                <Route path="/login" exact component={LoginPage} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="*" exact component={PageNotFound} />
              </Switch>
              <Footer />
            </>
          )
      }
    </>
  );
}

export default App;
