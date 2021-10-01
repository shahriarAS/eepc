import React from 'react'
import AddCategory from './Dialogue/AddCategory'
import AddDialogue from './Dialogue/AddDialogue'

function DialogueDashboard() {
    return (
        <div className="w-full h-full border-dashed border-4 p-4 text-md">
            <p className="text-xl bg-blue-400 p-4 text-white text-center font-black">Dialogue Dashboard</p>
            <div className="w-full">
                <AddDialogue />
                <AddCategory /> 
            </div>
        </div>
    )
}

export default DialogueDashboard
