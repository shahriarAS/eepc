import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";

function NavBar() {
    const [visibleMenu, setVisibleMenu] = useState(false)
    const [DropDown, setDropDown] = useState(false)

    const toggleMenu = () => {
        setVisibleMenu(visibleMenu ? false : true)
    }

    const toggleDrop = () => {
        setDropDown(DropDown ? false : true)
    }

    const toggleDrop_Menu = () => {
        toggleDrop()
        toggleMenu()
    }

    return (
        <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
            <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                <div className="p-4 flex flex-row items-center justify-between">
                    <Link to="/" className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">EEPC</Link>
                    <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline" onClick={toggleMenu}>
                        <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                            <path className={visibleMenu ? "hidden" : "block"} fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
                            <path className={visibleMenu ? "block" : "hidden"} fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <nav className={`${visibleMenu ? "flex" : "hidden"} transition-all duration-300 z-50 flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}>
                    <NavLink onClick={toggleMenu} to="/grammer" activeClassName="text-gray-900 bg-gray-200" className="px-4 py-2 mt-2 text-sm font-semibold rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Grammer</NavLink>
                    <NavLink onClick={toggleMenu} to="/suffix-prefix" activeClassName="text-gray-900 bg-gray-200" className="px-4 py-2 mt-2 text-sm font-semibold rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Suffix & Prefix</NavLink>
                    <NavLink onClick={toggleMenu} to="/vocabulary" activeClassName="text-gray-900 bg-gray-200" className="px-4 py-2 mt-2 text-sm font-semibold rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Vocabulary</NavLink>
                    <div onClick={toggleDrop}>
                        <button className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                            <span>Written</span>
                            <svg fill="currentColor" viewBox="0 0 20 20" className={`${DropDown ? "rotate-180" : "rotate-0"} inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1`}><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                        <div className={`absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 ${DropDown ? "" : "hidden"}`}>
                            <div onClick={() => toggleDrop_Menu()} className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
                                <Link to="/written/paragraph" className="w-full text-left block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Paragraph</Link>
                                <Link to="/written/dialogue" className="w-full text-left block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Dialogue</Link>
                                <Link to="/written/composition" className="w-full text-left block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Composition</Link>
                            </div>
                        </div>
                    </div>
                </nav >
            </div >
        </div >
    )
}

export default NavBar
