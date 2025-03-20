import { React } from "react";
import person from "../../assets/img/yo.webp";

export const Inicio = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-screen bg-fondo bg-cover bg-center">
      <div className="flex items-center ml-5 justify-center md:justify-start">
        <img
          src={person}
          alt="Profile"
          className="w-48 sm:w-64 md:w-80 rounded-full border-4 border-opacity-20 border-white z-10 relative"
        />
      </div>
      <div className="flex flex-col justify-center items-center md:items-end text-justify md:text-left space-y-4 mr-5">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#4A9DFF] mb-4 animate-fadeIn">
          Hello!
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300">
          I'm <span className="text-gray-100">Robert Gabriel</span>
        </h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A9DFF]">
          FullStack Developer
        </h3>
      </div>
    </div>
  );
};
