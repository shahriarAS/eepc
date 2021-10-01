import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import VBModal from './VBModal'

function VBWordPage() {
    const [showModal, setShowModal] = useState(false)
    const [searchState, setSearchState] = useState("")
    const [modalProps, setModalProps] = useState({
        word: "",
        bnWord: ""
    })
    const { vcategory, title } = useParams()

    console.log(vcategory, title)

    const VBData = useSelector(state => state.VBData)[vcategory]
    
    const WordList = {}
    for (let i = 0; i <= (VBData && VBData["bnWords"].split("\n").length - 1); i++) {
        WordList[VBData["words"].split("\n")[i].trim().replace(/\./g, '')] = VBData["bnWords"].split("\n")[i].trim().replace(/\./g, '')
    }
    // console.log(WordList)

    const showModalFunc = (word, bnWord) => {
        setModalProps({ word, bnWord })
        setShowModal(true)
    }

    const WordListKeys = Object.keys(WordList)
    const searchList = WordListKeys.filter(i => i.search(searchState) != -1)

    const preventCopy = (e) => {
        e.preventDefault()
        alert("Do not Copy, Please")
    }

    return (
        <>
            {
                showModal ? <VBModal word={modalProps.word} bnWord={modalProps.bnWord} setShowModal={setShowModal} /> : null
            }
            <div onCopy={(e) => preventCopy(e)} className="flex justify-center items-center h-full pb-8 bg-gray-200">
                <div className="container flex flex-col justify-center items-center">
                    <div className="my-4 flex flex-col justify-center items-center">
                        <h1 className="text-xl text-blue-500">{title}</h1>
                        <div className="flex ">
                            <input type="text" name="search" className="px-4 rounded my-4 h-8" placeholder="Search Here" value={searchState} onChange={(e) => setSearchState(e.target.value)} />
                            {/* <button className="ml-4" ><img className="border border-white bg-indigo-500 rounded p-2 w-10 h-10" src={searchImg} /></button> */}
                        </div>
                    </div>
                    <div className="flex justify-center w-full">
                        <div className="bg-white shadow-xl rounded-lg w-full md:w-1/2 mx-2">
                            <ul className="">
                                {
                                    searchState ?
                                        (
                                            searchList && searchList.map(word => (
                                                <li key={Math.random()} onClick={() => showModalFunc(word, WordList[word])} className="VB-li border-b border-gray-400 flex justify-around content-center p-4 hover:bg-gray-50 cursor-pointer">{word}<span> = </span><span>{WordList[word]}</span></li>
                                            ))
                                        )
                                        : (
                                            WordList && Object.entries(WordList).map(VBItem => (
                                                <li key={Math.random()} onClick={() => showModalFunc(VBItem[0], VBItem[1])} className="VB-li border-b border-gray-400 flex justify-around content-center p-4 hover:bg-gray-50 cursor-pointer">{VBItem[0]}<span> = </span><span>{VBItem[1]}</span></li>
                                            ))

                                        )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VBWordPage
