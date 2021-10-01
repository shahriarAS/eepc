import React from 'react'
import AddCategory from './Paragraph/AddCategory'
import AddParagraph from './Paragraph/AddParagraph'

function ParagraphDashboard() {
    return (
        <div className="w-full h-full border-dashed border-4 p-4 text-md">
            <p className="text-xl bg-blue-400 p-4 text-white text-center font-black">Paragraph Dashboard</p>
            <div className="w-full">
            <AddParagraph /> 
                <AddCategory />
            </div>
        </div>
    )
}

export default ParagraphDashboard
