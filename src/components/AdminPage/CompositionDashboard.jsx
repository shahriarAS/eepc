import React from 'react'
import AddComposition from './Composition/AddComposition'
import AddCategory from './Composition/AddCategory'

function CompositionDashboard() {
    return (
        <div className="w-full h-full border-dashed border-4 p-4 text-md">
            <p className="text-xl bg-blue-400 p-4 text-white text-center font-black">Composition Dashboard</p>
            <div className="w-full">
                <AddComposition />
                <AddCategory /> 
            </div>
        </div>
    )
}

export default CompositionDashboard
