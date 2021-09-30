import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import SFModal from './SFModal'

function SFWordPage() {
    const [showModal, setShowModal] = useState(false)
    const [modalProps, setModalProps] = useState({
        word: "",
        bnWord: ""
    })
    const { wordEndIn, title } = useParams()

    const SFData = useSelector(state => state.SFData)[wordEndIn]
    const WordList = {}
    for (let i = 0; i <= (SFData && SFData["bnWords"].split("\n").length - 1); i++) {
        WordList[SFData["words"].split("\n")[i].trim().replace(/\./g, '')] = SFData["bnWords"].split("\n")[i].trim().replace(/\./g, '')
    }

    const showModalFunc = (word, bnWord) => {
        setModalProps({ word, bnWord })
        setShowModal(true)
    }

    return (
        <>
            {
                showModal ? <SFModal word={modalProps.word} bnWord={modalProps.bnWord} setShowModal={setShowModal} /> : null
            }
            <div className="flex justify-center h-full pb-8 bg-gray-200">
                <div className="container">
                    <div className="flex justify-center p-4 my-4">
                        <h1 className="text-xl text-blue-500">{title}</h1>
                    </div>
                    <div className="flex justify-center w-full">
                        <div className="bg-white shadow-xl rounded-lg w-full md:w-1/2 mx-2">
                            <ul className="">
                                {WordList && Object.entries(WordList).map(SFItem => (
                                    <li key={Math.random()} onClick={() => showModalFunc(SFItem[0], SFItem[1])} className="SF-li border-b border-gray-400 flex justify-around content-center p-4 hover:bg-gray-50 cursor-pointer">{SFItem[0]}<span> = </span><span>{SFItem[1]}</span></li>
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

export default SFWordPage
