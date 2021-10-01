import React from 'react'
import AddCV from './CV/AddCV'
import AddCategory from './CV/AddCategory'

function CVDashboard() {
    return (
        <div className="w-full h-full border-dashed border-4 p-4 text-md">
            <p className="text-xl bg-blue-400 p-4 text-white text-center font-black">CV Dashboard</p>
            <div className="w-full">
                <AddCV />
                <AddCategory /> 
            </div>
        </div>
    )
}

export default CVDashboard
