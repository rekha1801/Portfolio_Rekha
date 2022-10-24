import React from "react";
import pokemon from "../assests/pokemon.jpg";
import todoList from "../assests/todoList.jpg";
import musicPlayer from "../assests/music_player.jpg";
import blog from "../assests/Blog.jpg";

export default function Projects() {
  return (
    <div
      name="projects"
      className="w-full md:h-screen bg-[#0a192f] text-gray-300"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-orange-400">
            Projects
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>
        {/* container */}
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Items */}
          <div
            style={{ backgroundImage: `url(${pokemon})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity=0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Javascript
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${todoList})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity=0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${musicPlayer})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity=0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Music Player Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${blog})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity=0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Blog - FullStack Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
