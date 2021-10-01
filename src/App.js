import './App.css';
import NavBar from './components/root/NavBar';
import Footer from './components/root/Footer';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import SFHomepage from './components/Suffix&Prefix/SFHomepage';
import SFWordPage from './components/Suffix&Prefix/SFWordPage';
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
import VBHomepage from './components/Vocabulary/VBHomepage';
import VBWordPage from './components/Vocabulary/VBWordPage';
import GrammarHomepage from './components/Grammar/GrammarHomepage';
import GrammarDetailPage from './components/Grammar/GrammarDetailPage';
import ParagraphDetailPage from './components/Paragraph/ParagraphDetailPage';
import ParagraphHomepage from './components/Paragraph/ParagraphHomepage';
import CompositionHomepage from './components/Composition/CompositionHomepage';
import CompositionDetailPage from './components/Composition/CompositionDetailPage';
import DialogueHomepage from './components/Dialogue/DialogueHomepage';
import DialogueDetailPage from './components/Dialogue/DialogueDetailPage';

function App() {

  const loading_status = useSelector(state => state.loading_status)
  const dispatch = useDispatch(EEPCReducer)

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
    });
  }

  const grabData = (dbPath, dispatchType, finish = false) => {

    const dbRef = ref(getDatabase());
    get(child(dbRef, `${dbPath}/`)).then((snapshot) => {
      if (snapshot.exists()) {
        dispatch({
          type: dispatchType,
          payload: snapshot.val()
        })
        if (finish) {
          dispatch({
            type: "finish_loading"
          })
        }
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }


  useEffect(() => {
    grabCurrentUser()
    grabData("VBCategory", "populate_vbCategory")
    grabData("VBData", "populate_vbData")
    grabData("ParagraphCategory", "populate_grammarCategory")
    grabData("ParagraphData", "populate_grammarData")
    grabData("ParagraphCategory", "populate_paragraphCategory")
    grabData("ParagraphData", "populate_paragraphData")
    grabData("CompositionCategory", "populate_compositionCategory")
    grabData("CompositionData", "populate_compositionData")
    grabData("DialogueCategory", "populate_dialgoueCategory")
    grabData("DialogueData", "populate_dialgoueData")
    grabData("SFCategory", "populate_sfCategory")
    grabData("SFData", "populate_sfData", true)
  }, [])

  return (
    <>
      {
        loading_status == "loading" ? (
          <LoadingPage />
        ) : (
            <>
              <NavBar />
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/suffix-prefix" exact component={SFHomepage} />
                <Route path="/suffix-prefix/:wordEndIn/:title" exact component={SFWordPage} />
                <Route path="/vocabulary" exact component={VBHomepage} />
                <Route path="/vocabulary/:vcategory/:title" exact component={VBWordPage} />
                <Route path="/grammar" exact component={GrammarHomepage} />
                <Route path="/grammar/:grammarCategory" exact component={GrammarDetailPage} />
                <Route path="/written/paragraph" exact component={ParagraphHomepage} />
                <Route path="/written/paragraph/:paragraphCategory" exact component={ParagraphDetailPage} />
                <Route path="/written/composition" exact component={CompositionHomepage} />
                <Route path="/written/composition/:compositionCategory" exact component={CompositionDetailPage} />
                <Route path="/written/dialogue" exact component={DialogueHomepage} />
                <Route path="/written/dialogue/:dialogueCategory" exact component={DialogueDetailPage} />
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
