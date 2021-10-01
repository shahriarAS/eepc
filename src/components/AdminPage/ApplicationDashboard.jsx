import React from 'react'
import AddApplication from './Application/AddApplication'
import AddCategory from './Application/AddCategory'

function ApplicationDashboard() {
    return (
        <div className="w-full h-full border-dashed border-4 p-4 text-md">
            <p className="text-xl bg-blue-400 p-4 text-white text-center font-black">Application Dashboard</p>
            <div className="w-full">
                <AddApplication />
                <AddCategory /> 
            </div>
        </div>
    )
}

export default ApplicationDashboard
