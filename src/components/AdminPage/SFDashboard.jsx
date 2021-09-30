import React from 'react'
import AddCategory from './SF/AddCategory'
import AddWord from './SF/AddWord'

function SFDashboard() {
    return (
        <div className="w-full h-full border-dashed border-4 p-4 text-md">
            <p className="text-xl bg-blue-400 p-4 text-white text-center font-black">Suffix & Prefix Dashboard</p>
            <div className="flex justify-around items-start flex-col lg:flex-row">
                <AddWord />
                <AddCategory />
            </div>
        </div>
    )
}

export default SFDashboard
