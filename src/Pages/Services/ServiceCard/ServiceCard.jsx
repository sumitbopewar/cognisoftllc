import React from "react";
import "./ServiceCard.css"

export default function Card(props) {
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
