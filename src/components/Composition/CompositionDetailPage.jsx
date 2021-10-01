import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import JoditEditor from "jodit-react";

function CompositionDetailPage() {
    const { compositionCategory } = useParams()
    const CompositionData = useSelector(state => state.CompositionData)[compositionCategory]

    const preventCopy = (e) => {
        e.preventDefault()
        alert("Do not Copy, Please")
    }

    return (
        <>
            <div className="flex justify-center items-center h-full pb-8 bg-gray-200">
                <div className="container flex flex-col justify-center items-center">
                    <div className="my-4 flex flex-col justify-center items-center">
                        <h1 className="text-xl text-blue-500">{compositionCategory}</h1>
                    </div>
                    <div className="flex justify-center w-full">
                        <div onCopy={(e) => preventCopy(e)} className="bg-white shadow-xl rounded-lg w-full md:w-1/2 mx-2 p-4  ">
                            <JoditEditor
                                value={CompositionData}
                                config={{ readonly: true, toolbar: false }}
                                tabIndex={1} // tabIndex of textarea
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompositionDetailPage
