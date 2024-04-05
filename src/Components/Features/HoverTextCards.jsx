import React from 'react'
import './hoverText.css'
import '../Stats/State.css'
// import Button from './Button/Button';


function HoverTextCards() {
    return (
        <div className='bg-white'>
            <section class="py-10 bg-w sm:py-16 lg:py-24 z-40 relative">
                <div class="xl:container mx-auto px-6 md:px-12">
                    <section id="first">
                        <div className="esc flex text-center">
                            <section class="esc__title">
                                <h5
                                    id="headings"
                                    style={{
                                        fontSize: "1.5rem",
                                    }}
                                >
                                    Customer’s Review
                                </h5>
                                <span className="ct-text-inner">
                                    <strong>Highly satisfied clients</strong> World-wide
                                </span>
                                <br />
                                <strong className="text-lg">Rated 5.0/5.0 | 40 REVIEWS</strong>
                            </section>
                        </div>
                    </section>
                    <div class="grid gap-0 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5" id='third'>
                        <div class="group relative rounded-3xl  space-y-6 overflow-hidden" style={
                            {
                                borderRight: "2px solid rgba(255,255,255,0.3)", borderRadius: "0px"
                            }
                        }>
                            <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                                <div>
                                    <h4 class="text-xl font-semibold dark:text-gray-700 text-white">Digital Marketing</h4>
                                    {/* <span class="block text-sm text-gray-500">CEO-Founder</span> */}
                                </div>
                                <p class="mt-8 text-gray-300 dark:text-gray-600">We have the experience and the knowhow to help ensure effective decision-making, whether you are looking.</p>
                                {/* <Button /> */}
                            </div>

                        </div>
                        <div class="group relative rounded-3xl  space-y-6 overflow-hidden" style={
                            {
                                borderRight: "2px solid rgba(255,255,255,0.3)", borderRadius: "0px"
                            }
                        }>
                            <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                                <div>
                                    <h4 class="text-xl font-semibold dark:text-gray-700 text-white">Software Development</h4>
                                    {/* <span class="block text-sm text-gray-500">CEO-Founder</span> */}
                                </div>
                                <p class="mt-8 text-gray-300 dark:text-gray-600 p">
                                    If you’ve built up your IT system over a period of time, you probably have a mix of different hardware and software.</p>
                            </div>

                        </div>
                        <div class="group relative rounded-3xl  space-y-6 overflow-hidden" style={
                            {
                                borderRight: "2px solid rgba(255,255,255,0.3)", borderRadius: "0px"
                            }
                        }>
                            <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                                <div>
                                    <h4 class="text-xl font-semibold dark:text-gray-700 text-white">App Development</h4>
                                    {/* <span class="block text-sm text-gray-500">CEO-Founder</span> */}
                                </div>
                                <p class="mt-8 text-gray-300 dark:text-gray-600">We’ll identify where potential problems might occur and provide you with a detailed set of recommendations.</p>
                            </div>

                        </div>
                        <div class="group relative rounded-3xl  space-y-6 overflow-hidden" style={
                            {
                                borderRight: "2px solid rgba(255,255,255,0.3)", borderRadius: "0px"
                            }
                        }>
                            <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                                <div>
                                    <h4 class="text-xl font-semibold dark:text-gray-700 text-white">CRM Development</h4>
                                    {/* <span class="block text-sm text-gray-500">CEO-Founder</span> */}
                                </div>
                                <p class="mt-8 text-gray-300 dark:text-gray-600">
                                    If you have decided to upgrade or extend your IT infrastructure, we can ensure that the project goes smoothly.</p>
                            </div>

                        </div>
                        <div class="group relative rounded-3xl  space-y-6 overflow-hidden" style={
                            {
                                borderRight: "2px solid rgba(255,255,255,0.3)", borderRadius: "0px"
                            }
                        }>
                            <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                                <div>
                                    <h4 class="text-xl font-semibold dark:text-gray-700 text-white">Research & Energy</h4>
                                    {/* <span class="block text-sm text-gray-500">CEO-Founder</span> */}
                                </div>
                                <p class="mt-8 text-gray-300 dark:text-gray-600">
                                    So if you need to improve the speed and efficiency of your IT system, contact us for professional and unbiased.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HoverTextCards