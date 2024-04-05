
import React from 'react'
import Carousel from '../Components/Carousel/Carousel'
import Hero from '../Components/Hero/Hero'
import Section from '../Components/Section/Section'
import Stats from '../Components/Stats/Stats'
import HoverTextCards from '../Components/Features/HoverTextCards'
import Rating from '../Components/Rating/Rating'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Header/Navbar'


function Home() {
  return (
    <div>
        <Navbar />
        <Carousel />
        <Hero />
        <Section />
        <Stats />
        <HoverTextCards />
        <Rating />
        <Footer />
    </div>
  )
}

export default Home