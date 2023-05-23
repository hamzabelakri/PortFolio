import React from "react";
import aboutImg from "../assets/images/about.png";
import DevResume from "../assets/DevResume.pdf";

function About() {
  const info = [
    { text: "Months experience", count: "4" },
    { text: "Completed Projects", count: "06" },
    { text: "Companies Work", count: "1" },
  ];
  return (
    <section id="about" className="-mt-8 sm:mt-0 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-7xl mx-auto">
          <div className="p-2 md:mx-10">
            <div className="text-gray-300 my-3 ">
              <p className="font-sans text-lg font-normal text-justify leading-loose ">
                <ul class="list-disc marker:text-cyan-600">
                  <li>
                    I have embarked on a career change journey, driven by the
                    desire to pursue a more promising and reliable field as a
                    FullStack JS developer.
                  </li>
                  <li>
                    Aside from finishing my training at GoMyCode Bootcamp, I've
                    been studying on my own for months and learning new things
                    every day.
                  </li>
                  <li>
                    During my internship at IoWaves startup, I was involved in a
                    challenging project that entailed transforming an existing
                    monolithic application into a microservices architecture.
                  </li>
                  <li>
                    To ensure a smooth transition, this endeavor required
                    selecting appropriate technologies and tools such as NestJS,
                    InfluxDB, RabbitMQ, Docker, Keycloak, ReactJS ...
                  </li>
                  <li>
                    This experience has instilled in me a deep understanding of
                    the Complexities and considerations involved in modernizing
                    and optimizing software systems.
                  </li>
                  <li>
                    I am eager to delve deeper into the realms of technology,
                    explore emerging trends, and embrace new challenges.
                  </li>
                </ul>
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
                  <a href={DevResume} download>
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
