import React, { useEffect, useState } from "react";
import axios from "axios"
import LoadingPage from "../root/LoadingPage";

function VBModal(props) {
    const [modalLoading, setModalLoading] = useState(true)

    const { word, bnWord, setShowModal } = props
    const [wordData, setWordData] = useState({
        partOfSpeech: "",
        synonyms: [],
        antonyms: [],
        defination: "",
        example: "",
        phonetic: ""


    })

    const SynonymFinder = () => {
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then(response => {
                // setWordData({
                //     meaningList: response.data[0].meanings,
                //     phonetic: response.data[0].phonetics[0].audio
                // })
                setWordData({
                    partOfSpeech: response.data[0].meanings[0].partOfSpeech,
                    synonyms: response.data[0].meanings[0].definitions[0].synonyms,
                    antonyms: response.data[0].meanings[0].definitions[0].antonyms,
                    defination: response.data[0].meanings[0].definitions[0].definition,
                    example: response.data[0].meanings[0].definitions[0].example,
                    phonetic: response.data[0].phonetics[0].audio
                })
                setModalLoading(false)
            })
            .catch(err => {
                console.log(err)
                setModalLoading(false)
            })
    }

    const preventCopy = (e) => {
        e.preventDefault()
        alert("Do not Copy, Please")
    }

    useEffect(() => {
        SynonymFinder()
    }, [])

    return (
        <>
            {modalLoading ? (<LoadingPage />) : (<>
                <div onCopy={(e) => preventCopy(e)}
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 py-2 border-b border-solid border-blueGray-200 rounded-t">
                                <h3 className="text-3xl font-semibold">
                                    {word} - {bnWord}
                                </h3>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 pt-2 flex-auto">
                                <div>
                                    <p className="text-lg"><span className="font-black">Phonetic:</span></p>
                                    <audio src={wordData.phonetic} controls="controls">
                                        Your browser does not support the audio element.
</audio>
                                    <span className="inline-block h-1 w-full rounded bg-gray-300"></span>
                                </div>
                                <div>
                                    <p className="text-lg"><span className="font-black">Part Of Speech:</span> <span className="italic">{wordData.partOfSpeech}</span></p>
                                    <span className="inline-block h-1 w-full rounded bg-gray-300"></span>
                                </div>
                                <div>
                                    <p className="text-lg"><span className="font-black">Defination:</span> <span className="italic">{wordData.defination} </span></p>
                                    <span className="inline-block h-1 w-full rounded bg-gray-300"></span>
                                </div>
                                <div>
                                    <p className="text-lg"><span className="font-black">Example:</span> <span className="italic">{wordData.example}</span></p>
                                    <span className="inline-block h-1 w-full rounded bg-gray-300"></span>
                                </div>
                                <div className="flex justify-around items-center">
                                    <div><p className="text-lg font-black">Synonyms:</p>
                                        <ul>
                                            {wordData && wordData.synonyms.slice(0, 5).map(
                                                syn => (<li key={Math.random()}>{syn}</li>))}
                                        </ul>
                                    </div>
                                    <span className="inline-block h-12 w-1 rounded bg-gray-300"></span>
                                    <div><p className="text-lg font-black">Antonyms:</p>
                                        <ul>
                                            {wordData && wordData.antonyms.slice(0, 5).map(
                                                syn => (<li key={Math.random()}>{syn}</li>))}
                                        </ul>
                                    </div>
                                </div>
                                <span className="inline-block h-1 w-full rounded bg-indigo-300"></span>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 py-0 border-t border-solid border-blueGray-200 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
          </button>
                                {/* <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                    >
                        Save Changes
          </button> */}
                            </div>
                        </div>
                    </div>
                </div >
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div></>)
            }
        </>
    );
}

export default VBModal