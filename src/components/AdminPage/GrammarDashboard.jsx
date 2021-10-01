import React from 'react'
import AddGrammar from './Grammar/AddGrammar'
import AddCategory from './Grammar/AddCategory'

function GrammarDashboard() {
    return (
        <div className="w-full h-full border-dashed border-4 p-4 text-md">
            <p className="text-xl bg-blue-400 p-4 text-white text-center font-black">Grammar Dashboard</p>
            <div className="w-full">
                <AddGrammar />
                <AddCategory /> 
            </div>
        </div>
    )
}

export default GrammarDashboard
