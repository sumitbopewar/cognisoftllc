import React from "react";

function TextContent() {
  return (
    <div className="w-9/12 m-auto">
      <div className="md:p-20 pb-0">
        <h2
          className="font-bold py-2 text-blue-600"
          style={{
            display: "flex",
            justifyContent: "",
            alignItems: "center",
            gap: "20px",
            fontSize: "20px",
          }}
        >
          Who We Are? <img src="/right.svg" alt="" />
        </h2>
        <h1 className="text-4xl text-black m-auto">
          Discover Your Path to{" "}
          <span className="text-blue-600">Excellence</span> with CogniSoft IT
          Services
        </h1>
        <p className="text-black my-3 text-balance">
          We provide the full spectrum of IT services and consulting for various
          industries.
        </p>
      </div>

      <div className="grid md:grid-cols-2 md:px-16 gap-4 m-auto">
        <div class="">
          <img
            class="h-24 w-auto hover:animate-bounce"
            src="/images/digital_marketing.png"
            alt="Digital Marketing"
          />
          <div class="">
            <div class="font-bold text-lg mb-2">Digital Marketer</div>
            <p class="text-slate-500 text-justify">
              Our customers get solutions and business opportunities instead of
              just projects. Our mission is to accelerate.
            </p>
          </div>
        </div>
        <div class="">
          <img
            class="h-24 w-auto hover:animate-bounce"
            src="/images/global_enterpreneur.png"
            alt="Sunset in the mountains"
          />
          <div class="">
            <div class="font-bold text-lg mb-2">Global Enterpreneur</div>
            <p class="text-slate-500 text-justify">
              Our customers get solutions and business opportunities instead of
              just projects. Our mission is to accelerate.
            </p>
          </div>
        </div>
      </div>
      <button className="mx-16 px-3 py-2 border-3 border-blue-600 hover:bg-blue-600 hover:text-white font-bold">
        About Us
      </button>
    </div>
  );
}

export default TextContent;
