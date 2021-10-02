import React from 'react'
import { Link } from 'react-router-dom'
import ClapButton from 'react-clap-button';

function WrittenHome() {
    const writtenList = [
        {
            title: "Paragraph",
            slug: "/written/paragraph"
        },
        {
            title: "Dialogue",
            slug: "/written/dialogue"
        },
        {
            title: "Composition",
            slug: "/written/composition"
        },
        {
            title: "CV/Resume",
            slug: "/written/cv"
        },
        {
            title: "Application",
            slug: "/written/application"
        },
        {
            title: "Letter",
            slug: "/written/letter"
        },
        {
            title: "Completing Story",
            slug: "/written/story"
        },
        {
            title: "Graph",
            slug: "/written/graph"
        },
        {
            title: "Email",
            slug: "/written/email"
        },
    ]

    return (
        <div className="flex justify-center h-full pb-8 bg-gray-200">
            <div className="container">
                <div className="flex justify-center p-4 my-4">
                    <h1 className="text-xl text-blue-500">Written Package</h1>
                </div>
                <div className="flex justify-center w-full">
                    <div className="bg-white shadow-xl rounded-lg w-full md:w-1/2 mx-2">
                        <ul className="divide-y divide-gray-300">
                            {
                                writtenList.map(writtenItem => (
                                    <Link key={Math.random()} to={writtenItem.slug}><li className="Paragraph-li border-b border-gray-400 flex justify-between content-center p-4 hover:bg-gray-50 cursor-pointer">{writtenItem.title}<span className="text-xl">➤</span></li></Link>
                                ))
                            }

                        </ul>
                    </div>
                </div>
                {/* <ClapButton
                count={0}
                countTotal={0}
                maxCount={50}
                isClicked={false}
                onCountChange={onCountChange}
                iconComponent={props => <CustomIcon {...props} size={38} 
                /> */}
            </div>
        </div>
    )
}

export default WrittenHome
