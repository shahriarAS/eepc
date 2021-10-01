import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import JoditEditor from "jodit-react";
import { getDatabase, ref, set } from "firebase/database";

function AddApplication() {
    const editor = useRef(null)


    const ApplicationCategory = useSelector(state => state.ApplicationCategory)
    const ApplicationData = useSelector(state => state.ApplicationData)

    const [categorySelect, setcategorySelect] = useState(ApplicationCategory[0] ? ApplicationCategory[0].slug : "")

    const [editorState, setEditorState] = useState(ApplicationData[categorySelect] ? ApplicationData[categorySelect] : "")


    const handleEditor = (html) => {
        setEditorState(html)
    }

    const saveApplication = () => {
        const db = getDatabase();
        set(ref(db, 'ApplicationData/' + categorySelect), editorState)
        alert(`Successfully added words in "${categorySelect}" category`)
    }

    const config = {
        readonly: false // all options from https://xdsoft.net/jodit/doc/
    }

    useEffect(() => {
        setEditorState(ApplicationData[categorySelect] ? ApplicationData[categorySelect] : "")
    }, [categorySelect])

    return (
        <div className="flex w-full md:p-8 items-center justify-center">
            <div className="flex flex-col w-full">
                <div
                    className="text-gray-800 text-2xl flex justify-center py-2 mb-4"
                >
                    Add Application
            </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-normal mb-2"
                        htmlFor="category"
                    >
                        Application Category
              </label>
                    <select
                        className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="category"
                        required
                        value={categorySelect}
                        onChange={(e) => setcategorySelect(e.target.value)}
                    >
                        {
                            ApplicationCategory.map(ApplicationItem => (
                                <option key={Math.random()} value={ApplicationItem.slug}>{ApplicationItem.slug}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="mb-4 w-ful mt-2l">
                    <label
                        className="block text-gray-700 text-sm font-normal mb-2"
                        htmlFor="Application"
                    >
                        Application
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
                    <button onClick={saveApplication} className="mt-4 px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" type="submit">Save</button>
                </div>
            </div>
        </div>
    )
}

export default AddApplication
