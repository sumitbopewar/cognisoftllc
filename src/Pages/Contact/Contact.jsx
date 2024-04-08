import React from "react";
import Navbar from "../../Components/Header/Navbar";
import Footer from "../../Components/Footer/Footer";
import Card2 from "../../Components/Cards/Card2";

function Contact() {
  return (
    <div>
      <Navbar />
      <div id="ct-pagetitle" className="ct-pagetitle bg-image">
        <div className="container heading" style={{ opacity: "1" }}>
          <div className="ct-page-title-holder">
            <h1 className="ct-page-title">Contact Us</h1>
          </div>

          <ul className="ct-breadcrumb">
            <li>
              <a className="breadcrumb-entry" href="https://cognisoftllc.com/">
                Home 8
              </a>
            </li>
            <li>
              <img src="/back.png" alt="" width={20} />
            </li>
            <li>
              <span className="breadcrumb-entry">Contact</span>
            </li>
          </ul>
        </div>
      </div>
      {/* title */}
      <div className="flex flex-row justify-center place-items-center w-10/12 m-auto">
        <div
          className="p-10"
          style={{
            fontSize: "135px",
            fontWeight: "700",
          }}
        >
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign:"center",
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
            Contact Us <img src="/right.svg" alt="" />
          </h2>
          <h1
            className="text-4xl  w-full mt-4"
            style={{
              color: "#0f67f6",
            }}
          >
            <span className="text-black">Grow Your Future With </span>
            <br />
            Our Expertise
          </h1>
        </div>
        <div className="p-10">
          <p className="text-black font-semibold">
            We understand the importance of approaching each work integrally and
            believe in the power of simple.
          </p>
        </div>
      </div>

      <div className="container-fluid p-3">
        <div className="row lg:w-9/12 m-auto my-2">
          {/* Contact Info */}
          <div className="col col-md-4 h-full m-auto">
            <div
              className="card card-address flex flex-row my-3 border-0"
              style={{ backgroundColor: "#F2F6FB" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-20 h-6 self-center"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>

              <div className="card-body">
                <h5 className="card-title fw-bold">Office Address</h5>
                <p className=" text-secondary">
                  30 N Gould St. Ste. 4000 Sheridan , Wyoming 82801 Branch
                  Office : Ganesh Nagar, Nagpur , Maharashtra India.
                </p>
              </div>
            </div>
            <div
              className="card card-number flex flex-row my-3 border-0"
              style={{ backgroundColor: "#F2F6FB" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 self-center"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>

              <div className="card-body">
                <h5 className="card-title fw-bold">Phone Number</h5>
                <p className="text-secondary">+130 7529 0408</p>
              </div>
            </div>
            <div
              className="card card-email flex flex-row my-3 border-0"
              style={{ backgroundColor: "#F2F6FB" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 self-center"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>

              <div className="card-body">
                <h5 className="card-title fw-bold">Mail Address</h5>
                <p className="text-secondary">info@cognisoftllc.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col col-md-8 m-2.5 md:m-auto">
            <form
              action=""
              className="row row-gap-5 shadow rounded md:p-16 lg:p-20 xl:p-32"
              style={{ backgroundColor: "#F2F6FB" }}
            >
              <div className="col-12 col-md-6">
                <label className="col-form-label" for="Name">
                  Name (required)
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="Name"
                  placeholder="Your Name*"
                  required
                />
              </div>

              <div className="col-12 col-md-6">
                <label className="col-form-label" for="Email">
                  Email Address (required)
                </label>
                <input
                  className="form-control"
                  type="email"
                  id="Email"
                  placeholder="Mail*"
                  required
                />
              </div>

              <div className="col-12 col-md-6">
                <label className="col-form-label" for="Phone">
                  Phone (optional)
                </label>
                <input
                  className="form-control"
                  type="tel"
                  id="Phone"
                  placeholder="Phone"
                />
              </div>

              <div className="col-12 col-md-6">
                <label className="col-form-label" for="Services">
                  Services (required)
                </label>
                <select
                  className="form-select"
                  id="Services"
                  aria-label="Services"
                  required
                >
                  <option selected>Select a service</option>
                  <option value="Web Design">Web Design</option>
                  <option value="Web Development">Web Development</option>
                </select>
              </div>

              <div className="col-12">
                <label className="col-form-label" for="Message">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="Message"
                  placeholder="Type Message*"
                  required
                ></textarea>
              </div>
              <input type="submit" value="Submit" className="form-control" />
            </form>
          </div>
        </div>
      </div>

      {/* MAP */}
      <div className="map">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9251.629868599686!2d-106.95814875548335!3d44.79869083424242!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fabc2a650d27%3A0x3092109ed30c1089!2s30%20N%20Gould%20St%20%234000%2C%20Sheridan%2C%20WY%2082801!5e0!3m2!1sen!2sus!4v1712468444435!5m2!1sen!2sus"
          height="400"
          className="w-full grayscale"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
