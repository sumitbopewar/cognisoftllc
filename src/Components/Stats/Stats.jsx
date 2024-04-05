import React, { useState, useEffect } from "react";
// import Cloud from "../Clouds/Cloud";
import "./State.css";

const stats = [
  {
    id: 1,
    name: `World Wide Branchs`,
    value: 2,
    img: "images/buildings.png",
  },
  {
    id: 2,
    name: "Satisfied Client",
    value: 238,
    img: "images/discussion.png",
  },
  {
    id: 3,
    name: "Awards Winning Company",
    value: 17,
    img: "images/trophy.png",
  },
  {
    id: 4,
    name: "Satisfied Team Members",
    value: 45,
    img: "images/networking.png",
  },
];

function Stats() {
  const [animatedStats, setAnimatedStats] = useState(
    stats.map((stat) => ({ ...stat, animatedValue: 0 }))
  );

  useEffect(() => {
    const animationDuration = 2000; // Adjust this based on your preference
  
    const updateAnimatedValues = () => {
      setAnimatedStats((prevStats) =>
        prevStats.map((stat) => {
          const animatedValue = stat.animatedValue + Math.ceil(stat.value / (animationDuration / 100));
          return {
            ...stat,
            animatedValue: animatedValue >= stat.value ? stat.value : animatedValue,
          };
        })
      );
    };

    const interval = setInterval(() => {
      updateAnimatedValues();
  
      // Check if all animated values match the actual values
      if (animatedStats.every((stat) => stat.animatedValue === stat.value)) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [animatedStats]);

  return (
    <div>
      <div className="bg-white pt-24 sm:pt-32">
        <section id="first">
          <div className="esc flex text-center">
            <section class="esc__title">
              <h5
                id="headings"
                style={{
                  fontSize: "1.5rem",
                }}
              >
                Fun Fact
              </h5>
              <span className="ct-text-inner">
                <strong>Gain productivity and performance</strong> <br /> Built
                with simple IT.
              </span>
            </section>
          </div>
        </section>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {animatedStats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex m-auto justify-center items-center max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 text-gray-500 order-3 font-normal">
                  {stat.name}
                </dt>
                <dd className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl order-2" style={
                  {
                    fontSize: "48px"
                  }
                }>
                  {stat.animatedValue+"+"}
                </dd>
                <img src={stat.img} alt="" className="order-1" width={75} />
              </div>
            ))}
          </dl>
        </div>
        {/* <Cloud /> */}
      </div>
      {/* <Rating /> */}
    </div>
  );
}

export default Stats;
