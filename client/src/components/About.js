import React from "react";
import aboutImg from "../assets/images/about.png";
import resume from "../assets/resume.pdf";

function About() {
  const info = [
    { text: "Years experience", count: "0" },
    { text: "Completed Projects", count: "06" },
    { text: "Companies Work", count: "0" },
  ];
  return (
    <section id="about" className="-mt-8 sm:mt-0 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2 md:mx-10">
            <div className="text-gray-300 my-3">
              <p className="font-sans text-lg font-normal text-justify leading-relaxed w-11/14">
                I've decided to change careers and pursue a more promising and
                reliable field, as I am trying to be a FullStack JS developer.
                <br />
                Aside from finishing my training at GoMyCode Bootcamp, I've been
                studying on my own for months and learning new things every day.
                <br />
                I'm completely smitten, and I'd like to learn more and dive
                deeper into this area.
                <br />
                P.S. "freeCodeCamp" was my first introduction to programming.
              </p>
              <div className="flex mt-10 items-center justify-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-bold text-white">
                      {content.count}
                      <span className="text-cyan-600 font-bold">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs font-semibold">
                      {content.text}
                    </span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <div class="flex justify-center">
                <button className="btn-primary">
                  <a href={resume} download>
                    Download CV
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
