import React from 'react'
import AddStory from './Story/AddStory'
import AddCategory from './Story/AddCategory'

function StoryDashboard() {
    return (
        <div className="w-full h-full border-dashed border-4 p-4 text-md">
            <p className="text-xl bg-blue-400 p-4 text-white text-center font-black">Story Dashboard</p>
            <div className="w-full">
                <AddStory />
                <AddCategory /> 
            </div>
        </div>
    )
}

export default StoryDashboard
