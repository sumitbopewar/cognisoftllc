import React from "react";
import "./Services.css";
import Navbar from "../../Components/Header/Navbar";
import Footer from "../../Components/Footer/Footer";
import Card from "./ServiceCard/ServiceCard";
import Sliders from "./Slider/Sliders";
import TextContent from "./TextContent/TextContent";
// import Slider from 'react-slick'

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
            <li>
              <a class="breadcrumb-entry" href="https://cognisoftllc.com/">
                Home 8
              </a>
            </li>
            <li>
              <img src="/back.png" alt="" width={20} />
            </li>
            <li>
              <span class="breadcrumb-entry">Services</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center p-10">
        <h2
          className="font-bold"
          style={{
            display: "flex",
            justifyContent: "center",
            color: "#0F67F6",
            alignItems: "center",
            gap: "20px",
            fontSize: "20px",
          }}
        >
          <img
            src="/left.svg"
            alt=""
            style={{
              transform: "rotate(180deg)",
              marginTop: "4px",
            }}
          />{" "}
          Our Services <img src="/right.svg" alt="" />
        </h2>
        <h1 className="text-4xl text-black md:w-6/12 m-auto p-2">
          We provide the necessary services to you
        </h1>
      </div>

      {/* Services Cards */}
      <div className="w-10/12 grid md:grid-cols-2 lg:grid-cols-3 gap-5 m-auto md:p-5 pb-5">
        <Card
          title="Resume Preparation"
          image="images/resume-prep.jpg"
          desc="We transform your achievements into a powerful narrative, ensuring you stand out to potential employers."
        />
        <Card
          title="LinkedIn Optimization"
          image="images/linkedin-optimise.jpg"
          desc="Leveraging the power of LinkedIn to enhance your professional online presence, making you more visible to recruiters and industry professionals."
        />
        <Card
          title="Portfolio Building"
          image="images/portfolio-build.jpg"
          desc="Showcasing your work with a personalized online portfolio, complete with a domain of your choice for a lasting and impactful impression."
        />
        <Card
          title="Industrial Technical Training"
          image="images/industrial-tech-training.jpg"
          desc="Our industry experts provide hands-on, customized training sessions designed to enhance your skills and expertise."
        />
        <Card
          title="Profile Marketing"
          image="images/profile-marketing.jpg"
          desc="Our dedicated profile marketing services at CogniSoft promote your unique talents to top employers."
        />
        <Card
          title="Interview Support"
          image="images/interview support.jpg"
          desc="Our comprehensive interview support services at CogniSoft prepare you for various interview scenarios."
        />
      </div>

      <div class="flex gap-2">
        <div class="bg-gray-200 p-4">
          <Sliders />
        </div>
        <div class="bg-gray-300 p-4">
          <TextContent />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
