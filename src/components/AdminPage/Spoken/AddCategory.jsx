import React from 'react'
import { useFormik } from "formik"
import { getDatabase, ref, set } from "firebase/database";

function AddCategory() {
    const formik = useFormik({

        initialValues: {
            slug: "",
        },
        onSubmit: values => {
            const db = getDatabase();
            set(ref(db, 'SpokenCategory/' + (Math.round(Math.random() + Date.now()))), {
                slug: values.slug,
            });
            alert(`Successfully added new category "${values.slug}".`)
            formik.resetForm();
        }
    })

    return (
        <div className="flex w-full items-center justify-center">
            <div className="w-full">
                <form className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4" onSubmit={formik.handleSubmit}>
                    <div
                        className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4"
                    >
                        Add Spoken Category
            </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-normal mb-2"
                            htmlFor="slug"
                        >
                            Spoken Slug
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
                    <button className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" type="submit">Save</button>
                </form>
            </div>
        </div>
    )
}

export default AddCategory
