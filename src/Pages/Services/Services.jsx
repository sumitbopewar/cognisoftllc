import React from 'react'
import './Services.css'
import Navbar from '../../Components/Header/Navbar'
import Card from '../../Components/Cards/Card'
// import Slider from 'react-slick'
import Sliders from './Slider/Sliders'

function Services() {
    return (
        <div>
            <Navbar />
            <div id="ct-pagetitle" class="ct-pagetitle bg-image">
                <div class="container heading" style={{ opacity: "1" }}>
                    <div class="ct-page-title-holder">
                        <h1 class="ct-page-title">Services</h1>
                    </div>

                    <ul class="ct-breadcrumb">
                        <li><a class="breadcrumb-entry" href="https://cognisoftllc.com/">Home 8</a></li>
                        <li><img src="/back.png" alt="" width={20} /></li>
                        <li><span class="breadcrumb-entry">Services</span></li>
                    </ul>
                </div>
            </div>
            <div className="text-center p-20">
                <h2 style={
                    {
                        display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", fontSize: "20px"
                    }
                }><img src="/left.svg" alt="" style={{
                    transform: "rotate(180deg)", marginTop: "4px"
                }} /> Services <img src="/right.svg" alt="" /></h2>
                <h1 className='text-4xl text-black w-50 m-auto'>We provide the necessary services to you</h1>
            </div>
            <Card />
            <Card />
            <div class="flex gap-2">
                <div class="bg-gray-200 p-4" style={{
                    width: "50%"
                }}>
                    <Sliders />
                </div>
                <div class="bg-gray-300 p-4" style={{
                    width: "50%"
                }}>
                    
                </div>
            </div>

        </div>
    )
}

export default Services