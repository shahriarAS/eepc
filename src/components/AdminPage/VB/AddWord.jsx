import React, { useState } from 'react'
import { useFormik } from "formik"
import { useSelector } from 'react-redux'
import { getDatabase, ref, set } from "firebase/database";

function AddWord() {
    const VBCategory = useSelector(state => state.VBCategory)
    const [categorySelect, setcategorySelect] = useState(VBCategory && VBCategory[0].slug)

    const VBData = useSelector(state => state.VBData)
    // const WordList = {}
    // for (let i = 0; i <= (VBData && VBData["bnWords"].split("\n").length - 1); i++) {
    //     WordList[VBData["words"].split("\n")[i].trim().replace(/\./g, '')] = VBData["bnWords"].split("\n")[i].trim().replace(/\./g, '')
    // }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            words: VBData[categorySelect] ? VBData[categorySelect]["words"] : "",
            bnWords: VBData[categorySelect] ? VBData[categorySelect]["bnWords"] : ""
        },

        onSubmit: values => {
            const db = getDatabase();
            set(ref(db, 'VBData/' + categorySelect), {
                words: values.words,
                bnWords: values.bnWords,
            })
            alert(`Successfully added words in "${categorySelect}" category`)
        }
    })

    return (
        <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
                <form className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4" onSubmit={formik.handleSubmit}>
                    <div
                        className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4"
                    >
                        Add Vocabulary
            </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-normal mb-2"
                            htmlFor="category"
                        >
                            Vocabulary Category
              </label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="category"
                            required
                            value={categorySelect}
                            onChange={(e) => setcategorySelect(e.target.value)}
                        >
                            {
                                VBCategory.map(VBItem => (
                                    <option key={Math.random()} value={VBItem.slug}>{VBItem.title}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-normal mb-2"
                            htmlFor="words"
                        >
                            English Words
              </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full h-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="words"
                            required
                            value={formik.values.words}
                            onChange={formik.handleChange}
                            placeholder="Development"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-normal mb-2"
                            htmlFor="bnWords"
                        >
                            Bangla Words
              </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full h-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="bnWords"
                            required
                            value={formik.values.bnWords}
                            onChange={formik.handleChange}
                            placeholder="উন্নতি"
                        />
                    </div>
                    <button className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" type="submit">Save</button>
                </form>
            </div>
        </div>
    )
}

export default AddWord
