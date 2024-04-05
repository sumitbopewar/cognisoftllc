import React from 'react'
import Navbar from '../../Components/Header/Navbar'
import './about.css'


function About() {
    return (
        <div>
            <Navbar />
            <div id="ct-pagetitle" class="ct-pagetitle bg-image">
                <div class="container heading" style={{ opacity: "1" }}>
                    <div class="ct-page-title-holder">
                        <h1 class="ct-page-title">About Us</h1>
                    </div>

                    <ul class="ct-breadcrumb">
                        <li><a class="breadcrumb-entry" href="https://cognisoftllc.com/">Home 8</a></li>
                        <li><img src="/back.png" alt="" width={20} /></li>
                        <li><span class="breadcrumb-entry">About</span></li>
                    </ul>
                </div>
            </div>
            <div className="text-center p-10" style={{
                fontSize: '135px',
                fontWeight: '700'
            }}>
                <h2 style={
                    {
                        display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", fontSize: "20px"
                    }
                }><img src="/left.svg" alt="" style={{
                    transform: "rotate(180deg)", marginTop: "4px"
                }} /> About Us <img src="/right.svg" alt="" /></h2>
                <h1 className='text-4xl text-black w-full mt-4'><span style={{
                    color: '#0f67f6'
                }}>CogniSoft IT Services –</span> <br /> Empowering Your Journey with Trust and Transparency</h1>
            </div>
            <div className="button">
                <a class="el-btn-video btn" href="https://www.youtube.com/watch?v=SF4aHwxHtZ0">
                    Check details about our Company<span>
                        <i class="fa fa-play"></i>
                    </span>
                </a>
            </div>
        </div>

    )
}

export default About