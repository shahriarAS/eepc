import React, { useState } from 'react'
import GrammarDashboard from './GrammarDashboard'
import DialogueDashboard from './DialogueDashboard'
import CompositionDashboard from './CompositionDashboard'
import ParagraphDashboard from './ParagraphDashboard'
import SFDashboard from './SFDashboard'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getAuth, signOut } from "firebase/auth";
import EEPCReducer from '../redux/eepcReducer'
import VBDashboard from './VBDashboard'

function Dashboard() {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch(EEPCReducer)

    const [showSidebar, setShowSidebar] = useState(false)
    const [tabTitle, setTabTitle] = useState("Grammar")

    const toggleSidebar = () => {
        setShowSidebar(showSidebar ? false : true)
    }

    const logOutFunc = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            alert("Logged Out")
            dispatch({
                type: "logout"
            })
        }).catch((error) => {
            console.log(error)
        });
    }

    if (!user) {
        return (
            <Redirect to="/login" />
        )
    }
    else {

        return (
            <main className="flex w-full h-full">
                <aside className={`w-80 h-screen bg-gray shadow-md w-fulll ${showSidebar ? "" : "hidden"} sm:block`}>
                    <div className="flex flex-col justify-between h-screen p-4 bg-gray-800">
                        <div onClick={toggleSidebar} className="text-sm">
                            <div onClick={() => setTabTitle("Grammar")} className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">Grammar</div>
                            <div onClick={() => setTabTitle("Suffix-Prefix")} className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">Suffix & Prefix</div>
                            <div onClick={() => setTabTitle("Vocabulary")} className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">Vocabulary</div>
                            <div onClick={() => setTabTitle("Paragraph")} className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">Paragraph</div>
                            <div onClick={() => setTabTitle("Dialogue")} className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">Dialogue</div>
                            <div onClick={() => setTabTitle("Composition")} className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">Composition</div>
                        </div>

                        <div onClick={logOutFunc} className="flex p-3 text-white bg-red-500 rounded cursor-pointer text-center text-sm">
                            <button className="rounded inline-flex items-center">
                                <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" /></svg>
                                <span className="font-semibold">Logout</span>
                            </button>
                        </div>
                    </div>
                </aside>

                <section className="w-full p-4">
                    <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline" onClick={toggleSidebar}>
                        <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                            <path className={showSidebar ? "hidden" : "block"} fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
                            <path className={showSidebar ? "block" : "hidden"} fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                    {
                        (tabTitle == "Grammar") ? <GrammarDashboard /> : (tabTitle == "Suffix-Prefix") ? <SFDashboard /> : 
                        (tabTitle == "Vocabulary") ? <VBDashboard /> : (tabTitle == "Paragraph") ? <ParagraphDashboard /> : (tabTitle == "Dialogue") ? <DialogueDashboard /> : (tabTitle == "Composition") ? <CompositionDashboard /> : null
                    }
                </section>

            </main>
        )
    }
}

export default Dashboard
