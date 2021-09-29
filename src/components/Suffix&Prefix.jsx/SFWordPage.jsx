import React from 'react'
import { Link, useParams } from 'react-router-dom'

function SFWordPage() {
    const { wordEndIn } = useParams()
    return (
        <div class="flex justify-center h-full pb-8 bg-gray-200">
            <div class="container">
                <div class="flex justify-center p-4 my-4">
                    <h1 class="text-xl text-blue-500">Word Ends In "{wordEndIn}"</h1>
                </div>
                <div class="flex justify-center w-full">
                    <div class="bg-white shadow-xl rounded-lg w-full md:w-1/2 mx-2">
                        <ul class="">
                            <li class="SF-li border-b border-gray-400 flex justify-around content-center p-4 hover:bg-gray-50 cursor-pointer">Another<span> = </span><span>অন্যান্য</span></li>
                            <li class="SF-li border-b border-gray-400 flex justify-around content-center p-4 hover:bg-gray-50 cursor-pointer">Another<span> = </span><span>অন্যান্য</span></li>
                            <li class="SF-li border-b border-gray-400 flex justify-around content-center p-4 hover:bg-gray-50 cursor-pointer">Another<span> = </span><span>অন্যান্য</span></li>
                            <li class="SF-li border-b border-gray-400 flex justify-around content-center p-4 hover:bg-gray-50 cursor-pointer">Another<span> = </span><span>অন্যান্য</span></li>
                            <li class="SF-li border-b border-gray-400 flex justify-around content-center p-4 hover:bg-gray-50 cursor-pointer">Another<span> = </span><span>অন্যান্য</span></li>
                            <li class="SF-li border-b border-gray-400 flex justify-around content-center p-4 hover:bg-gray-50 cursor-pointer">Another<span> = </span><span>অন্যান্য</span></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SFWordPage
