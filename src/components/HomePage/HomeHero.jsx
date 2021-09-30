import React from 'react'
import HeroImg from "../../assets/photos/learnenglish.jpeg"
import { Link } from 'react-router-dom'

function HomeHero() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mt-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">The Complete
        <br className="hidden lg:inline-block" /> English Language Solution
      </h1>
                    <p className="mb-8 leading-relaxed">The significance of the English Language is numerous as it's a global language now. Here, you will get a lot of ideas, techniques as well as well decorated methodologies to enhance your proficiency in English. This app has been designed for the benefit of all types of students who are studying school, college, or university.</p>
                    <div className="flex justify-center">
                        <Link to="/Grammar" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Grammar</Link>
                        <Link to="/suffix-prefix" className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Suffix & Prefix</Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src={HeroImg} />
                </div>
            </div>
        </section>
    )
}

export default HomeHero
