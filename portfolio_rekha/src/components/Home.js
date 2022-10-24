import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import rekha_pic from "../assests/rekha.JPG";

export default function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] w-full h-full">
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          <div className="max-w-[1000px] w-full sm:grid grid-cols-1 gap-2">
            <div className="md:text-right">
              <img
                style={{
                  width: "200px",
                  height: "200px",
                  float: "right",
                  borderRadius: "70%",
                }}
                src={rekha_pic}
                alt="rekha"
              />
            </div>
            <div></div>
          </div>
          <p className="text-orange-400">Hello... My name is </p>

          <h1 className="text-4xl sm:text-6xl py-3 font-bold text-[#ccd6f6]">
            Rekha Musuvati Motilal
          </h1>

          <h2 className="text-4xl sm:text-5xl font-bold text-[#8892b0]">
            I'm a Software Engineer
          </h2>
          <p className="py-4 max-w-[700px] text-[#8892b0]">
            A FullStack Developer (MERN Stack) recently graduated in a one year
            intensive training in building web Applications. Seeking for a
            responsible position to apply all the previous experience and Web
            Technologies to challenge myself.
          </p>
          <div>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-400 hover:border-orange-400">
              View Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
