import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <div
      name="contact"
      className="w-full sm:h-screen bg-[#0a192f] text-gray-300 flex justify-between items-center p-4"
    >
      <form
        action=""
        className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full"
      >
        <div className="pb-8 mx-auto">
          <p className="text-4xl font-bold inline border-b-4 border-orange-400 text-gray-300">
            Contact
          </p>
        </div>
        <div className="pb-8 border-4 border-orange-400 text-gray-300 mx-auto">
          <p className="py-4 m-8 font-bold">
            Email:{" "}
            <span className="text-2xl font-bold inline text-orange-300">
              rekha.musuvati@gmail.com
            </span>
          </p>
          <p className="py-4 m-8 font-bold">
            Github:
            <span className="text-2xl font-bold inline text-orange-300">
              rekha1801
            </span>
          </p>
          <div className="flex justify-center items-center p-4">
            <a
              className="flex justify-center items-center w-full text-orange-300"
              href="www.linkedin.com/in/rekha-musuvati-motilal"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              className="flex justify-center items-center w-full text-orange-300"
              href="https://github.com/rekha1801"
            >
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
