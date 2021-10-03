import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'

function CompositionHomepage() {
    const CompositionCategory = useSelector(state => state.CompositionCategory)

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Composition | EEPC</title>
            </Helmet>
            <div className="flex justify-center h-full pb-8 bg-gray-200">
                <div className="container">
                    <div className="flex justify-center p-4 my-4">
                        <h1 className="text-xl text-blue-500">Composition</h1>
                    </div>
                    <div className="flex justify-center w-full">
                        <div className="bg-white shadow-xl rounded-lg w-full md:w-1/2 mx-2">
                            <ul className="divide-y divide-gray-300">
                                {
                                    CompositionCategory.map(CompositionItem => (
                                        <Link key={Math.random()} to={`/written/composition/${CompositionItem.slug}`}><li className="Composition-li border-b border-gray-400 flex justify-between content-center p-4 hover:bg-gray-50 cursor-pointer">{CompositionItem.slug}<span className="text-xl">➤</span></li></Link>
                                    ))
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompositionHomepage
