import React from "react";
import "./ServiceCard.css";

function Card(props) {
  return (
    <div className="col service-card">
      <div class="w-full h-full max-w-sm bg-white rounded-lg drop-shadow-lg dark:bg-gray-800 p-3">
        <div class="flex flex-col pb-10">
          <img
            class="h-52 w-52 mb-3 rounded-full self-center shadow-lg"
            src={props.image}
            alt=""
          />
          <h5 class="mb-1 text-xl font-bold text-black dark:text-white">
            {props.title}
          </h5>
          <span class="text-xl text-gray-500 dark:text-gray-400">
            {props.desc}
          </span>
          <div class="flex mt-4 md:mt-6">
            <a
              href={props.href}
              class="inline-flex more items-center px-4 py-2 text-sm font-medium text-center text-white rounded-lg"
            >
              Read More +
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServiceCard() {
  return (
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
  );
}
