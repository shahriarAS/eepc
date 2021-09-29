import React from 'react'
import { Link } from 'react-router-dom'

function SFHomepage() {
    return (
        <div class="flex justify-center h-full pb-8 bg-gray-200">
            <div class="container">
                <div class="flex justify-center p-4 my-4">
                    <h1 class="text-xl text-blue-500">Suffix & Prefix</h1>
                </div>
                <div class="flex justify-center w-full">
                    <div class="bg-white shadow-xl rounded-lg w-full md:w-1/2 mx-2">
                        <ul class="divide-y divide-gray-300">
                        <Link to="/suffix-prefix/er"><li class="SF-li border-b border-gray-400 flex justify-between content-center p-4 hover:bg-gray-50 cursor-pointer">Word Ends In "er" <span className="text-xl">➤</span></li></Link>
                            <Link to="/suffix-prefix/er"><li class="SF-li border-b border-gray-400 flex justify-between content-center p-4 hover:bg-gray-50 cursor-pointer">Word Ends In "er" <span className="text-xl">➤</span></li></Link>
                            <Link to="/suffix-prefix/er"><li class="SF-li border-b border-gray-400 flex justify-between content-center p-4 hover:bg-gray-50 cursor-pointer">Word Ends In "er" <span className="text-xl">➤</span></li></Link>
                            <Link to="/suffix-prefix/er"><li class="SF-li border-b border-gray-400 flex justify-between content-center p-4 hover:bg-gray-50 cursor-pointer">Word Ends In "er" <span className="text-xl">➤</span></li></Link>
                            <Link to="/suffix-prefix/er"><li class="SF-li border-b border-gray-400 flex justify-between content-center p-4 hover:bg-gray-50 cursor-pointer">Word Ends In "er" <span className="text-xl">➤</span></li></Link>
                            <Link to="/suffix-prefix/er"><li class="SF-li border-b border-gray-400 flex justify-between content-center p-4 hover:bg-gray-50 cursor-pointer">Word Ends In "er" <span className="text-xl">➤</span></li></Link>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SFHomepage
