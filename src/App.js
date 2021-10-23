import './App.css';
import NavBar from './components/root/NavBar';
import Footer from './components/root/Footer';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/Pages/HomePage/HomePage';
import SFHomepage from './components/Pages/Suffix&Prefix/SFHomepage';
import SFWordPage from './components/Pages/Suffix&Prefix/SFWordPage';
import PageNotFound from './components/root/PageNotFound';
import { useEffect } from 'react';
import Dashboard from './components/AdminPage/Dashboard';
import LoginPage from './components/AdminPage/LoginPage';
import firebase from "./components/config/firebase"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import { useDispatch, useSelector } from 'react-redux';
import EEPCReducer from './components/redux/eepcReducer';
import LoadingPage from './components/root/LoadingPage';
import VBHomepage from './components/Pages/Vocabulary/VBHomepage';
import VBWordPage from './components/Pages/Vocabulary/VBWordPage';
import GrammarHomepage from './components/Pages/Grammar/GrammarHomepage';
import GrammarDetailPage from './components/Pages/Grammar/GrammarDetailPage';
import ParagraphDetailPage from './components/Pages/Paragraph/ParagraphDetailPage';
import ParagraphHomepage from './components/Pages/Paragraph/ParagraphHomepage';
import CompositionHomepage from './components/Pages/Composition/CompositionHomepage';
import CompositionDetailPage from './components/Pages/Composition/CompositionDetailPage';
import DialogueHomepage from './components/Pages/Dialogue/DialogueHomepage';
import DialogueDetailPage from './components/Pages/Dialogue/DialogueDetailPage';
import SpokenHomepage from './components/Pages/Spoken/SpokenHomepage';
import SpokenDetailPage from './components/Pages/Spoken/SpokenDetailPage';
import EmailDetailPage from './components/Pages/Email/EmailDetailPage';
import GraphDetailPage from './components/Pages/Graph/GraphDetailPage';
import GraphHomepage from './components/Pages/Graph/GraphHomepage';
import StoryDetailPage from './components/Pages/CompletingStory/StoryDetailPage';
import LetterHomepage from './components/Pages/Letter/LetterHomepage';
import LetterDetailPage from './components/Pages/Letter/LetterDetailPage';
import ApplicationDetailPage from './components/Pages/Application/ApplicationDetailPage';
import ApplicationHomepage from './components/Pages/Application/ApplicationHomepage';
import CVDetailPage from './components/Pages/CV/CVDetailPage';
import CVHomepage from './components/Pages/CV/CVHomepage';
import StoryHomepage from './components/Pages/CompletingStory/StoryHomepage';
import EmailHomepage from './components/Pages/Email/EmailHomepage';
import SpokenDashboard from './components/AdminPage/SpokenDashboard';
import WrittenHome from './components/Pages/Written/WrittenHome';
import ReactGA from 'react-ga';
import { Helmet } from "react-helmet";
import About from './components/Pages/Legal/About';
import Disclaimer from './components/Pages/Legal/Disclaimer';
import PrivacyPolicy from './components/Pages/Legal/PrivacyPolicy';
import Contact from './components/Pages/Legal/Contact';

function App() {

  ReactGA.initialize('UA-209060295-1');
  ReactGA.pageview(window.location.pathname + window.location.search);

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
    const db = getDatabase();

    return onValue(ref(db, dbPath), (snapshot) => {
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
        if (finish) {
          dispatch({
            type: "finish_loading"
          })
        }
      }
    }, {
      onlyOnce: true
    });
  }

  // const grabData = (dbPath, dispatchType, finish = false) => {

  //   const dbRef = ref(getDatabase());
  //   get(child(dbRef, `${dbPath}/`)).then((snapshot) => {
  //     if (snapshot.exists()) {
  //       dispatch({
  //         type: dispatchType,
  //         payload: snapshot.val()
  //       })
  //     } else {
  //       console.log("No data available");
  //     }
  //     if (finish) {
  //       dispatch({
  //         type: "finish_loading"
  //       })
  //     }
  //   }).catch((error) => {
  //     console.error(error);
  //   });
  // }


  useEffect(() => {
    grabCurrentUser()
    grabData("SFCategory", "populate_sfCategory")
    grabData("SFData", "populate_sfData")
    grabData("VBCategory", "populate_vbCategory")
    grabData("VBData", "populate_vbData")
    grabData("GrammarCategory", "populate_grammarCategory")
    grabData("GrammarData", "populate_grammarData")
    grabData("SpokenCategory", "populate_spokenCategory")
    grabData("SpokenData", "populate_spokenData")
    grabData("ParagraphCategory", "populate_paragraphCategory")
    grabData("ParagraphData", "populate_paragraphData")
    grabData("CompositionCategory", "populate_compositionCategory")
    grabData("CompositionData", "populate_compositionData")
    grabData("DialogueCategory", "populate_dialgoueCategory")
    grabData("DialogueData", "populate_dialgoueData")
    grabData("CVCategory", "populate_cvCategory")
    grabData("CVData", "populate_cvData")
    grabData("ApplicationCategory", "populate_applicationCategory")
    grabData("ApplicationData", "populate_applicationData")
    grabData("LetterCategory", "populate_letterCategory")
    grabData("LetterData", "populate_letterData")
    grabData("StoryCategory", "populate_storyCategory")
    grabData("StoryData", "populate_storyData")
    grabData("GraphCategory", "populate_graphCategory")
    grabData("GraphData", "populate_graphData")
    grabData("EmailCategory", "populate_emailCategory")
    grabData("EmailData", "populate_emailData", true)
  }, [])

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>EEPC | Learn English With The Modern Way</title>
      </Helmet>
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
                <Route path="/spoken" exact component={SpokenHomepage} />
                <Route path="/spoken/:spokenCategory" exact component={SpokenDetailPage} />
                <Route path="/written" exact component={WrittenHome} />
                <Route path="/written/paragraph" exact component={ParagraphHomepage} />
                <Route path="/written/paragraph/:paragraphCategory" exact component={ParagraphDetailPage} />
                <Route path="/written/composition" exact component={CompositionHomepage} />
                <Route path="/written/composition/:compositionCategory" exact component={CompositionDetailPage} />
                <Route path="/written/dialogue" exact component={DialogueHomepage} />
                <Route path="/written/dialogue/:dialogueCategory" exact component={DialogueDetailPage} />
                <Route path="/written/cv" exact component={CVHomepage} />
                <Route path="/written/cv/:cvCategory" exact component={CVDetailPage} />
                <Route path="/written/application" exact component={ApplicationHomepage} />
                <Route path="/written/application/:applicationCategory" exact component={ApplicationDetailPage} />
                <Route path="/written/letter" exact component={LetterHomepage} />
                <Route path="/written/letter/:letterCategory" exact component={LetterDetailPage} />
                <Route path="/written/story" exact component={StoryHomepage} />
                <Route path="/written/story/:storyCategory" exact component={StoryDetailPage} />
                <Route path="/written/graph" exact component={GraphHomepage} />
                <Route path="/written/graph/:graphCategory" exact component={GraphDetailPage} />
                <Route path="/written/email" exact component={EmailHomepage} />
                <Route path="/written/email/:emailCategory" exact component={EmailDetailPage} />
                <Route path="/login" exact component={LoginPage} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/about" exact component={About} />
                <Route path="/disclaimer" exact component={Disclaimer} />
                <Route path="/privacy-policy" exact component={PrivacyPolicy} />
                <Route path="/contact" exact component={Contact} />
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
