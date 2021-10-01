import React from 'react'
import AddCategory from './VB/AddCategory'
import AddWord from './VB/AddWord'

function VBDashboard() {
    return (
        <div className="w-full h-full border-dashed border-4 p-4 text-md">
            <p className="text-xl bg-blue-400 p-4 text-white text-center font-black">Vocabulary Dashboard</p>
            <div className="flex justify-around items-start flex-col lg:flex-row">
                <AddWord />
                <AddCategory />
            </div>
        </div>
    )
}

export default VBDashboard
