import React from 'react'
import AddSpoken from './Spoken/AddSpoken'
import AddCategory from './Spoken/AddCategory'

function SpokenDashboard() {
    return (
        <div className="w-full h-full border-dashed border-4 p-4 text-md">
            <p className="text-xl bg-blue-400 p-4 text-white text-center font-black">Spoken Dashboard</p>
            <div className="w-full">
                <AddSpoken />
                <AddCategory /> 
            </div>
        </div>
    )
}

export default SpokenDashboard
