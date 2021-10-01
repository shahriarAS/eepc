import React from 'react'
import AddGraph from './Graph/AddGraph'
import AddCategory from './Graph/AddCategory'

function GraphDashboard() {
    return (
        <div className="w-full h-full border-dashed border-4 p-4 text-md">
            <p className="text-xl bg-blue-400 p-4 text-white text-center font-black">Graph Dashboard</p>
            <div className="w-full">
                <AddGraph />
                <AddCategory /> 
            </div>
        </div>
    )
}

export default GraphDashboard
