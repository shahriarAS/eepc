import React from 'react'
import nayeemPhoto from "../../../assets/photos/Nayeem.jpeg"
import sakibmollick from "../../../assets/photos/sakibmollick.jpeg"
import nusratjahankeya from "../../../assets/photos/Nusrat-Jahan-Keya.jpeg"

function Testimonial() {
    return (
        <section className="text-gray-600 body-font text-center">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900">What Our Student Says</h1>
            <span className="inline-block h-1 w-40 rounded bg-indigo-500 mt-6"></span>
            <div className="container px-5 py-24 pt-12 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div className="h-full text-center">
                            <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={nayeemPhoto} />
                            <p className="leading-relaxed">। have really been fascinated by the teaching method of this website. Hopefully, this site will be very useful for those who are interested in learning English.
</p>
                            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Md. Nayeem Ahmed</h2>
                            <p className="text-gray-500">SSC Candidate 2021</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div className="h-full text-center">
                            <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={nusratjahankeya} />
                            <p className="leading-relaxed">Ever since I first visited it, I have repeatedly visited this website, especially the suffix & prefix section. And I wonder how many words I can easily learn.
</p>
                            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Nusrat Jahan Keya</h2>
                            <p className="text-gray-500">Student Of Class 8</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 lg:mb-0 p-4">
                        <div className="h-full text-center">
                            <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={sakibmollick} />
                            <p className="leading-relaxed">The best website I've ever seen where English is so easy and beautiful. Especially the resources in the written section are very helpful.</p>
                            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">MD. Sakib Mollick</h2>
                            <p className="text-gray-500">Student Of Class 10</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
