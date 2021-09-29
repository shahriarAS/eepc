import React from 'react'
import shovonPhoto from "../../assets/photos/shovon.jpeg"
import billGatesPhoto from "../../assets/photos/billgates.jpeg"
import sakibPhoto from "../../assets/photos/sakibalhasan.jpeg"

function Testimonial() {
    return (
        <section className="text-gray-600 body-font text-center">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900">What Our Student Says</h1>
            <span className="inline-block h-1 w-40 rounded bg-indigo-500 mt-6"></span>
            <div className="container px-5 py-24 pt-12 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div className="h-full text-center">
                            <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={shovonPhoto} />
                            <p className="leading-relaxed">The best ever platform to learn English in Bangladesh. I really appreciate the affort which gives us a lot of support while learning English.</p>
                            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Shahriar Ahmed Shovon</h2>
                            <p className="text-gray-500">Full Stack Web Developer</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div className="h-full text-center">
                            <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={billGatesPhoto} />
                            <p className="leading-relaxed">The best ever platform to learn English in Bangladesh. I really appreciate the affort which gives us a lot of support while learning English.</p>
                            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">William Henry Gates</h2>
                            <p className="text-gray-500">Co-Founder Of Microsoft</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 lg:mb-0 p-4">
                        <div className="h-full text-center">
                            <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={sakibPhoto} />
                            <p className="leading-relaxed">The best ever platform to learn English in Bangladesh. I really appreciate the affort which gives us a lot of support while learning English.</p>
                            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Sakib Al Hasan</h2>
                            <p className="text-gray-500">Bangladeshi Cricket All-Rounder</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
