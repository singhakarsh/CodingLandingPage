import React from "react";

const Body = () => {
  return (
    <main className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
      <div className="lg:w-8/12 mb-8 lg:mb-0 pr-0 lg:pr-8">
        <h2 className="text-4xl font-bold font-lato mb-6 leading-tight">
          Best way to revise for your next coding interview
        </h2>
        <p className="text-gray-600 text-sm lg:text-base font-raleway mb-6">
          Get everything in a single guide: Data structures, algorithms,
          patterns, visualizers, questions, examples, solutions, explanations,
          and much more!
        </p>
        <button className="bg-black text-white px-8 py-3 rounded-full mb-8 hover:bg-gray-800 transition duration-300">
          Buy Free through Gumroad
        </button>
        <blockquote className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
          <p className="italic text-gray-600 text-sm">
            "Awesome! Love how the concepts are explained + all the wonderful
            resources mentioned. Having everything in one guide is super
            helpful."
          </p>
        </blockquote>
      </div>

      <div className="lg:w-4/12 relative">
        <div className="bg-green-500 text-white px-4 py-2 text-lato rounded-full absolute -top-4 -right-4 z-10 text-sm font-semibold">
          New Release
        </div>
        <img
          src="./assets/DSA_Image.webp"
          alt="DSA Course Logo"
          className="rounded-lg shadow-xl w-full"
        />
      </div>
    </main>
    
  );
};

export default Body;
