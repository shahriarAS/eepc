import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import JoditEditor from "jodit-react";
import { getDatabase, ref, set } from "firebase/database";

function AddCV() {
    const editor = useRef(null)


    const CVCategory = useSelector(state => state.CVCategory)
    const CVData = useSelector(state => state.CVData)

    const [categorySelect, setcategorySelect] = useState(CVCategory[0] ? CVCategory[0].slug : "")

    const [editorState, setEditorState] = useState(CVData[categorySelect] ? CVData[categorySelect] : "")


    const handleEditor = (html) => {
        setEditorState(html)
    }

    const saveCV = () => {
        const db = getDatabase();
        set(ref(db, 'CVData/' + categorySelect), editorState)
        alert(`Successfully added words in "${categorySelect}" category`)
    }

    const config = {
        readonly: false // all options from https://xdsoft.net/jodit/doc/
    }

    useEffect(() => {
        setEditorState(CVData[categorySelect] ? CVData[categorySelect] : "")
    }, [categorySelect])

    return (
        <div className="flex w-full md:p-8 items-center justify-center">
            <div className="flex flex-col w-full">
                <div
                    className="text-gray-800 text-2xl flex justify-center py-2 mb-4"
                >
                    Add CV
            </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-normal mb-2"
                        htmlFor="category"
                    >
                        CV Category
              </label>
                    <select
                        className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="category"
                        required
                        value={categorySelect}
                        onChange={(e) => setcategorySelect(e.target.value)}
                    >
                        {
                            CVCategory.map(CVItem => (
                                <option key={Math.random()} value={CVItem.slug}>{CVItem.slug}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="mb-4 w-ful mt-2l">
                    <label
                        className="block text-gray-700 text-sm font-normal mb-2"
                        htmlFor="CV"
                    >
                        CV
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
                    <button onClick={saveCV} className="mt-4 px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" type="submit">Save</button>
                </div>
            </div>
        </div>
    )
}

export default AddCV
