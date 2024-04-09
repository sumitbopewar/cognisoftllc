import React from "react";
import Navbar from "../../Components/Header/Navbar";
import Footer from "../../Components/Footer/Footer";
import Stats from "../../Components/Stats/Stats";
import "./about.css";
// import { Form } from "react-router-dom";

function About() {
  return (
    <>
      <div>
        <Navbar />
        <div id="ct-pagetitle" className="ct-pagetitle bg-image">
          <div className="container heading" style={{ opacity: "1" }}>
            <div className="ct-page-title-holder">
              <h1 className="ct-page-title">About Us</h1>
            </div>

            <ul className="ct-breadcrumb">
              <li>
                <a
                  className="breadcrumb-entry"
                  href="https://cognisoftllc.com/"
                >
                  Home 8
                </a>
              </li>
              <li>
                <img src="/back.png" alt="" width={20} />
              </li>
              <li>
                <span className="breadcrumb-entry">About</span>
              </li>
            </ul>
          </div>
        </div>
                {/* main container left section */}
        <div className="container row m-auto p-24">
          <div
            className="left text-center col"
            style={{
              fontSize: "135px",
              fontWeight: "700",
              position: "relative",
            }}
          >
            <h2
              style={{
                display: "flex",
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
              About Us <img src="/right.svg" alt="" />
            </h2>
            <h1 className="text-4xl text-black w-full mt-4">
              <span
                style={{
                  color: "#0f67f6",
                  justifyContent: "left",
                  marginRight: "230px",
                }}
              >
                CogniSoft IT Services –
              </span>
              <br />{" "}
              <span>Empowering Your Journey with Trust and Transparency</span>
            </h1>
            <p className="left-content" style={{ color: "black" }}>
              At CogniSoft IT Services, transparency is not just a word; it’s
              our guiding principle. We believe in providing you with clear,
              honest, and accurate information every step of the way. Our
              transparent approach ensures you are informed, empowered, and in
              control of your career decisions. With us, you can trust that your
              aspirations are in capable hands
            </p>

            <a
              href="https://www.youtube.com/watch?v=SF4aHwxHtZ0"
              className="el-btn-video btn"
              style={{ padding: "3px", backgroundColor: "blue" }}
              type="button"
            >
              Check details about our Company
              <span className="fa1">
                <i className="fa fa-play"></i>
              </span>
            </a>
          </div>
             {/* right section */}
          <div className="right-img col">
            <img
              className="img1"
              src="images/contact-bg.jpg"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>

                  {/* Cards */}

        <div className="container w-100">
          <div
            className="row row-cols-4 row-gap-4 p-3  "
            style={{ backgroundColor: "#F0F3F7" }}
          >
            {/* Card1 */}
            <div className="col text-center items-center  ">
              <div class="max-w-sm  border-none rounded-lg ">
                <a href="#">
                  <img
                    class="rounded-circle ms-auto me-auto"
                    src="https://cognisoftllc.com/wp-content/uploads/2021/10/intime-01.jpg"
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </a>
                <a
                  href="#"
                  class="btn btn-primary  btn-block shadow center  w-75 mt-3 rounded-0"
                >
                  <span>1</span>
                </a>

                <div class="p-5">
                  <a href="#">
                    <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-dark">
                      Our Commitment to Building Trust
                    </h3>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Welcome to CogniSoft IT Services, where transparency is not
                    just a value; it's the bedrock of our commitment to your
                    success. In the dynamic world of IT, trust and open
                    communication are paramount, and at CogniSoft, these
                    principles shape every interaction with you.
                  </p>
                </div>
              </div>
            </div>

            {/* Card2 */}
            <div className="col text-center items-center ">
              <div class="max-w-sm  border-none rounded-lg  ">
                <a href="#">
                  <img
                    class="rounded-circle ms-auto me-auto"
                    src="https://cognisoftllc.com/wp-content/uploads/2021/10/intime-01.jpg"
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </a>
                <a
                  href="#"
                  class="btn btn-primary  btn-block shadow center  w-75 mt-3 rounded-0"
                >
                  <span>2</span>
                  <i class="fas fa-icon-name"></i>
                </a>

                <div class="p-5">
                  <a href="#">
                    <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-dark">
                      Clear, Honest, Accurate Information
                    </h3>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    In an industry often clouded with ambiguity, we take pride
                    in providing clear, honest, and accurate information. From
                    your initial engagement with us to the realization of your
                    career goals, we ensure you are well-informed, empowered,
                    and confident in every decision.
                  </p>
                </div>
              </div>
            </div>

            {/* card3 */}
            <div className="col text-center items-center ">
              <div class="max-w-sm  border-none  rounded-lg s">
                <a href="#">
                  <img
                    class="rounded-circle ms-auto me-auto"
                    src="https://cognisoftllc.com/wp-content/uploads/2021/10/intime-01.jpg"
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </a>
                <a
                  href="#"
                  class="btn btn-primary  btn-block shadow center  w-75 mt-3 rounded-0"
                >
                  <span>3</span>
                  <i class="fas fa-icon-name"></i>
                </a>

                <div class="p-5">
                  <a href="#">
                    <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-dark">
                      Empowering Your Career Decisions
                    </h3>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Our transparent approach is designed to empower you in your
                    career journey. We understand the significance of informed
                    decisions. Whether you &#039;re exploring job opportunities,
                    seeking career advice, or engaging in training programs, we
                    believe you should have all the information to make choices
                    aligning with your aspirations.
                  </p>
                </div>
              </div>
            </div>

            {/* Card4 */}
            <div className="col text-center items-center ">
              <div class="max-w-sm  border-none rounded-lg ">
                <a href="#">
                  <img
                    class="rounded-circle ms-auto me-auto"
                    src="https://cognisoftllc.com/wp-content/uploads/2021/10/intime-01.jpg"
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </a>
                <a
                  href="#"
                  class="btn btn-primary  btn-block shadow center  w-75 mt-3 rounded-0"
                >
                  <span>4</span>
                  <i class="fas fa-icon-name"></i>
                </a>

                <div class="p-5">
                  <a href="#">
                    <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-dark">
                      Trust in Capable
                      <br />
                      Hands
                    </h3>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    With CogniSoft IT Services, trust is not merely earned; it
                    &#039;s cultivated. Your aspirations, ambitions, and career
                    objectives are in capable hands. We are committed to guiding
                    you toward opportunities that align with your skills and
                    goals, fostering a sense of security and confidence in your
                    career decisions.
                  </p>
                </div>
              </div>
            </div>

            {/* card5 */}
            <div className="col text-center items-center ">
              <div class="max-w-sm  border-none  rounded-lg ">
                <a href="#">
                  <img
                    class="rounded-circle ms-auto me-auto"
                    src="https://cognisoftllc.com/wp-content/uploads/2021/10/intime-01.jpg"
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </a>
                <a
                  href="#"
                  class="btn btn-primary  btn-block shadow center  w-75 mt-3 rounded-0"
                >
                  <span>5</span>
                  <i class="fas fa-icon-name"></i>
                </a>

                <div class="p-5">
                  <a href="#">
                    <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-dark">
                      Beyond Recruitment: A Holistic Approach
                    </h3>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Welcome to CogniSoft IT Services, where transparency is not
                    just a value; it &#039;s the bedrock of our commitment to
                    your success. In the dynamic world of IT, trust and open
                    communication are paramount, and at CogniSoft, these
                    principles shape every interaction with you.
                  </p>
                </div>
              </div>
            </div>

            {/* card6 */}
            <div className="col text-center items-center ">
              <div class="max-w-sm  border-none rounded-lg ">
                <a href="#">
                  <img
                    class="rounded-circle ms-auto me-auto"
                    src="https://cognisoftllc.com/wp-content/uploads/2021/10/intime-01.jpg"
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </a>
                <a
                  href="#"
                  class="btn btn-primary  btn-block shadow center  w-75 mt-3 rounded-0"
                >
                  <span>6</span>
                  <i class="fas fa-icon-name"></i>
                </a>

                <div class="p-5">
                  <a href="#">
                    <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-dark">
                      Clear, Honest, Accurate Information
                    </h3>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Our commitment to transparency extends beyond job placement.
                    Our holistic approach encompasses services such as resume
                    preparation, LinkedIn optimization, portfolio building,
                    technical training, and ongoing support. Transparency is
                    woven into every aspect of your professional development.
                  </p>
                </div>
              </div>
            </div>

            {/* card7 */}
            <div className="col text-center items-center ">
              <div class="max-w-sm  border-none  rounded-lg">
                <a href="#">
                  <img
                    class="rounded-circle ms-auto me-auto"
                    src="https://cognisoftllc.com/wp-content/uploads/2021/10/intime-01.jpg"
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </a>
                <a
                  href="#"
                  class="btn btn-primary  btn-block shadow center  w-75 mt-3 rounded-0"
                >
                  <span>7</span>
                  <i class="fas fa-icon-name"></i>
                </a>

                <div class="p-5">
                  <a href="#">
                    <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-dark">
                      Your Success is Our Success
                    </h3>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    At CogniSoft IT Services, your success is not just a metric;
                    it &#039;s our purpose. We measure our success by the
                    milestones you achieve in your career. Our commitment to
                    transparency is rooted in the belief that an informed and
                    empowered individual is the key to unlocking their full
                    potential.
                  </p>
                </div>
              </div>
            </div>

            {/* card8 */}
            <div className="col text-center items-center ">
              <div class="max-w-sm  border-none  rounded-lg">
                <a href="#">
                  <img
                    class="rounded-circle ms-auto me-auto"
                    src="https://cognisoftllc.com/wp-content/uploads/2021/10/intime-01.jpg"
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </a>
                <a
                  href="#"
                  class="btn btn-primary  btn-block shadow center  w-75 mt-3 rounded-0"
                >
                  <span>8</span>
                  <i class="fas fa-icon-name"></i>
                </a>

                <div class="p-5">
                  <a href="#">
                    <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-dark">
                      Trusted Partnerships with Industry Leaders
                    </h3>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Rest assured, your trust in us is well-placed. CogniSoft IT
                    Services proudly holds tie-ups with Fortune 500 companies
                    and over 3,000 other reputable firms across the USA. These
                    partnerships validate our commitment to providing
                    unparalleled opportunities for your career growth.
                  </p>
                </div>
              </div>
            </div>

            {/* card9 */}
            <div className="col text-center flex justify-center items-center ms-auto me-auto  ">
              <div class="max-w-sm  border-none rounded-lg ">
                <a href="#">
                  <img
                    class="rounded-circle ms-auto me-auto"
                    src="https://cognisoftllc.com/wp-content/uploads/2021/10/intime-01.jpg"
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </a>
                <a
                  href="#"
                  class="btn btn-primary  btn-block shadow center  w-75 mt-3 rounded-0"
                >
                  <span>9</span>
                  <i class="fas fa-icon-name"></i>
                </a>

                <div class="p-5">
                  <a href="#">
                    <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-dark">
                      Connect with CogniSoft IT Services – Where Trust and
                      Transparency Meet Limitless Possibilities
                    </h3>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Let &#039;s build a future where your career decisions are
                    guided by clear information, trust, and the limitless
                    possibilities that arise from our robust network and
                    commitment to your success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Stats />
        <Footer />
      </div>
    </>
  );
}

export default About;
