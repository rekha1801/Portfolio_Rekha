import React from "react";
import html from "../assests/html5.png";
import css from "../assests/css-8.png";
import javascript from "../assests/JavaScript.png";
import react from "../assests/react.png";
import aws from "../assests/aws.png";
import plsql from "../assests/plsql.png";
import github from "../assests/github.png";
import mongodb from "../assests/mongodb.png";
import mysql from "../assests/mysql.png";
import tailwind from "../assests/tailwind.png";
import nodejs from "../assests/nodejs-1-logo.png";

export default function Skills() {
  return (
    <div
      name="skills"
      className="w-full sm:h-screen bg-[#0a192f] text-gray-300"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto py-6 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-orange-400">
            Skills
          </p>
          <p className="pt-8">These are the Technologies that I worked on!</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={html} alt="HTML" />
            <p className="my-4">HTML</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={css} alt="CSS" />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={javascript} alt="JS" />
            <p className="my-4">JAVASCRIPT</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={react} alt="REACT" />
            <p className="my-4">REACT</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={aws} alt="AWS" />
            <p className="my-4">AWS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={plsql} alt="PL/SQL" />
            <p className="my-4">PL/SQL</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={github} alt="GITHUB" />
            <p className="my-4">GITHUB</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={mongodb} alt="MONGODB" />
            <p className="my-4">MONGODB</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={mysql} alt="MYSQL" />
            <p className="my-4">MYSQL</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={nodejs} alt="NODEJS" />
            <p className="my-4">NODEJS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={tailwind} alt="TAILWIND" />
            <p className="my-4">TAILWIND</p>
          </div>
        </div>
      </div>
    </div>
  );
}
