import React from "react";
import { Icon } from "@iconify/react";

function Skills() {
  const tools = [
    {
      name: "Github",
      logo: "bi:github",
      level: "Beginner",
      count: 20,
    },

    {
      name: "Docker",
      logo: "fa-brands:docker",
      level: "Beginner",
      count: 20,
    },
  ];

  const front = [
    {
      name: "HTML5",
      logo: "ion:logo-html5",
      level: "Intermediate",
      count: 40,
    },
    {
      name: "CSS3",
      logo: "ion:logo-css3",
      level: "Intermediate",
      count: 40,
    },
    {
      name: "React",
      logo: "ion:logo-react",
      level: "Intermediate",
      count: 40,
    },
    {
      name: "Redux",
      logo: "tabler:brand-redux",
      level: "Intermediate",
      count: 40,
    },
    {
      name: "Preact",
      logo: "simple-icons:preact",
      level: "Intermediate",
      count: 40,
    },
    {
      name: "Tailwind",
      logo: "mdi:tailwind",
      level: "Intermediate",
      count: 40,
    },
  ];

  const back = [
    {
      name: "NodeJs",
      logo: "ion:logo-nodejs",
      level: "Intermediate",
      count: 40,
    },
    {
      name: "Express",
      logo: "simple-icons:express",
      level: "Intermediate",
      count: 40,
    },
    {
      name: "MongoDB",
      logo: "bxl:mongodb",
      level: "Intermediate",
      count: 40,
    },
    {
      name: "NestJs",
      logo: "simple-icons:nestjs",
      level: "Intermediate",
      count: 40,
    },
    {
      name: "RabbitMQ",
      logo: "simple-icons:rabbitmq",
      level: "Beginner",
      count: 20,
    },
  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative mt-3">
      <div className="mt-5 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>

        {/* Tools */}

        <p className="text-gray-400 mt-7 text-2xl">Tools</p>
        <div className="flex items-center justify-center mt-7 gap-10 flex-wrap">
          {tools?.map((tools, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-6 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${tools.count}%,#ddd ${tools.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div
                  className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600"
                  title={tools.name}
                >
                  <Icon icon={tools.logo} />
                </div>
              </div>
              <p className="text-xl mt-3">{tools.level}</p>
            </div>
          ))}
        </div>

        {/* Frond-End */}

        <p className="text-gray-400 mt-7 text-2xl">Front-End</p>
        <div className="flex items-center justify-center mt-7 gap-10 flex-wrap">
          {front?.map((front, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-6 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${front.count}%,#ddd ${front.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div
                  className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600"
                  title={front.name}
                >
                  <Icon icon={front.logo} />
                </div>
              </div>
              <p className="text-xl mt-3">{front.level}</p>
            </div>
          ))}
        </div>

        {/* Back-End */}

        <p className="text-gray-400 mt-7 text-2xl">Back-End</p>
        <div className="flex items-center justify-center mt-7 gap-10 flex-wrap">
          {back?.map((back, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-6 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${back.count}%,#ddd ${back.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div
                  className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600"
                  title={back.name}
                >
                  <Icon icon={back.logo} />
                </div>
              </div>
              <p className="text-xl mt-3">{back.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
