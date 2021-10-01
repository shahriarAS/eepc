import React from 'react'
import AddEmail from './Email/AddEmail'
import AddCategory from './Email/AddCategory'

function EmailDashboard() {
    return (
        <div className="w-full h-full border-dashed border-4 p-4 text-md">
            <p className="text-xl bg-blue-400 p-4 text-white text-center font-black">Email Dashboard</p>
            <div className="w-full">
                <AddEmail />
                <AddCategory /> 
            </div>
        </div>
    )
}

export default EmailDashboard
