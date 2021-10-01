import React from 'react'
import AddLetter from './Letter/AddLetter'
import AddCategory from './Letter/AddCategory'

function LetterDashboard() {
    return (
        <div className="w-full h-full border-dashed border-4 p-4 text-md">
            <p className="text-xl bg-blue-400 p-4 text-white text-center font-black">Letter Dashboard</p>
            <div className="w-full">
                <AddLetter />
                <AddCategory /> 
            </div>
        </div>
    )
}

export default LetterDashboard
