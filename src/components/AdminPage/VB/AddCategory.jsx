import React from 'react'
import { useFormik } from "formik"
import { getDatabase, ref, set } from "firebase/database";

function AddCategory() {
    const formik = useFormik({

        initialValues: {
            slug: "",
            title: "",
        },
        onSubmit: values => {
            const db = getDatabase();
            set(ref(db, 'VBCategory/' + (Math.round(Math.random() + Date.now()))), {
                slug: values.slug,
                title: values.title
            });
            alert(`Successfully added new category "${values.slug}".`)
            formik.resetForm();
        }
    })

    return (
        <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
                <form className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4" onSubmit={formik.handleSubmit}>
                    <div
                        className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4"
                    >
                        Add Vocabulary Category
            </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-normal mb-2"
                            htmlFor="slug"
                        >
                            Vocabulary Slug
              </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="slug"
                            type="text"
                            required
                            onChange={formik.handleChange}
                            value={formik.values.slug}
                            placeholder="Science"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-normal mb-2"
                            htmlFor="title"
                        >
                            Vocabulary Title
              </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="title"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.title}
                            required
                            placeholder="Vocabulary About Science"
                        />
                    </div>
                    <button className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" type="submit">Save</button>
                </form>
            </div>
        </div>
    )
}

export default AddCategory
