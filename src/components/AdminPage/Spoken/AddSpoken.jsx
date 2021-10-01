import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import JoditEditor from "jodit-react";
import { getDatabase, ref, set } from "firebase/database";

function AddSpoken() {
    const editor = useRef(null)

    const config = {
        readonly: false // all options from https://xdsoft.net/jodit/doc/
    }

    const SpokenCategory = useSelector(state => state.SpokenCategory)
    const SpokenData = useSelector(state => state.SpokenData)

    const [categorySelect, setcategorySelect] = useState(SpokenCategory[0] ? SpokenCategory[0].slug : "")

    const [editorState, setEditorState] = useState(SpokenData[categorySelect] ? SpokenData[categorySelect] : "")


    const handleEditor = (html) => {
        setEditorState(html)
    }

    const saveSpoken = () => {
        const db = getDatabase();
        set(ref(db, 'SpokenData/' + categorySelect), editorState)
        alert(`Successfully added words in "${categorySelect}" category`)
    }

    useEffect(() => {
        setEditorState(SpokenData[categorySelect] ? SpokenData[categorySelect] : "")
    }, [categorySelect])

    return (
        <div className="flex w-full md:p-8 items-center justify-center">
            <div className="flex flex-col w-full">
                <div
                    className="text-gray-800 text-2xl flex justify-center py-2 mb-4"
                >
                    Add Spoken
            </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-normal mb-2"
                        htmlFor="category"
                    >
                        Spoken Category
              </label>
                    <select
                        className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="category"
                        required
                        value={categorySelect}
                        onChange={(e) => setcategorySelect(e.target.value)}
                    >
                        {
                            SpokenCategory.map(SpokenItem => (
                                <option key={Math.random()} value={SpokenItem.slug}>{SpokenItem.slug}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="mb-4 w-ful mt-2l">
                    <label
                        className="block text-gray-700 text-sm font-normal mb-2"
                        htmlFor="spoken"
                    >
                        Spoken
              </label>
                    <JoditEditor
                        ref={editor}
                        value={editorState}
                        config={config}
                        tabIndex={1} // tabIndex of textarea
                        onBlur={newContent => setEditorState(newContent)} // preferred to use only this option to update the content for performance reasons
                    />
                </div>
                <div className="mb-4 w-full mt-2">
                    <button onClick={saveSpoken} className="mt-4 px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" type="submit">Save</button>
                </div>
            </div>
        </div>
    )
}

export default AddSpoken
