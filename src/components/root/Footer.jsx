import React from 'react'
import logo from "../../assets/photos/logo.png"
import facebookLogo from "../../assets/photos/icons8-facebook-48.png"
import youtubeLogo from "../../assets/photos/icons8-youtube-48.png"
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <Link to="/"><img alt="Logo EEPC" className="w-32" src={logo} /></Link>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">Copyright © {new Date().getFullYear()} EEPC —
                </p>
                <p className="text-center text-sm">Developed With ❤️ By <a href="https://shahriarahmed.me" target="_blank" rel="noreferrer" className="underline">Shahriar Ahmed Shovon</a></p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a href="https://facebook.com/profile.php?id=100007418372375" rel="noreferrer" target="_blank"><img alt="Facebook Icon" className="w-6 h-6 mr-4" src={facebookLogo} /></a>
                    <a href="https://www.youtube.com/c/WORDMAKINGMACHINE/" rel="noreferrer" target="_blank"><img alt="Youtube Icon" className="w-6 h-6" src={youtubeLogo} /></a>
                </span>
            </div>
        </footer>
    )
}

export default Footer
