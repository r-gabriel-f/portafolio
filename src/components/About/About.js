import React from "react";

import html from "../../assets/iconos/skills/html.png";
import js from "../../assets/iconos/skills/js.png";
import css from "../../assets/iconos/skills/css.png";
import git from "../../assets/iconos/skills/git.png";
import tailwind from "../../assets/iconos/skills/tailwind.webp";
import vue from "../../assets/iconos/skills/vue.webp";
import ts from "../../assets/iconos/skills/typscript.webp";
import react from "../../assets/iconos/skills/react.png";
import { Button } from "primereact/button";
export const About = () => {
  return (
    <section className="h-auto sm:h-screen grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 p-4 pt-10">
      <div className="flex flex-col justify-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About</h2>
        <h3 className="text-xl md:text-2xl">
          I'm Robert Gabriel
          <span className="block text-[#4A9DFF]">
            Front End Developer / Systems Engineer
          </span>
        </h3>
        <p className="leading-relaxed">
          I'm a passionate frontend developer, specialized in creating modern,
          functional and responsive websites. I'm motivated to face challenges
          that drive the development of my skills and allow me to adopt new
          technologies and tools to offer efficient and innovative solutions.
        </p>
        <div className="flex justify-center">
            <Button
              label="Download CV"
              icon="pi pi-download"
              severity="secondary"
              onClick={() =>  window.open('https://docs.google.com/document/d/1tJZSAlGLrwu7UrO7yYM9ZOomumI0fZiX/edit?usp=sharing&ouid=101641531762784387805&rtpof=true&sd=true', '_blank')}
            />
        </div>
      </div>
      <div className="flex flex-col justify-center space-y-4">
        <h1 className="text-3xl font-bold">Skills</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="flex flex-col items-center">
            <h3 className="text-base font-semibold">Html</h3>
            <img
              src={html}
              alt="HTML Icon"
              className="w-16 sm:w-20 md:w-24 hover:rotate-[360deg] transition-transform duration-1000"
            />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-base font-semibold">Css</h3>
            <img
              src={css}
              alt="CSS Icon"
              className="w-16 sm:w-20 md:w-24 hover:rotate-[360deg] transition-transform duration-1000"
            />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-base font-semibold">Tailwind</h3>
            <img
              src={tailwind}
              alt="Tailwind Icon"
              className="w-16 sm:w-20 md:w-24 hover:rotate-[360deg] transition-transform duration-1000"
            />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-base font-semibold">JS</h3>
            <img
              src={js}
              alt="JS Icon"
              className="w-16 sm:w-20 md:w-24 hover:rotate-[360deg] transition-transform duration-1000"
            />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-base font-semibold">TS</h3>
            <img
              src={ts}
              alt="TS Icon"
              className="w-16 sm:w-20 md:w-24 hover:rotate-[360deg] transition-transform duration-1000"
            />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-base font-semibold">React</h3>
            <img
              src={react}
              alt="React Icon"
              className="w-16 sm:w-20 md:w-24 hover:rotate-[360deg] transition-transform duration-1000"
            />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-base font-semibold">Vue</h3>
            <img
              src={vue}
              alt="Vue Icon"
              className="w-16 sm:w-20 md:w-24 hover:rotate-[360deg] transition-transform duration-1000"
            />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-base font-semibold">Git</h3>
            <img
              src={git}
              alt="Git Icon"
              className="w-16 sm:w-20 md:w-24 hover:rotate-[360deg] transition-transform duration-1000"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
