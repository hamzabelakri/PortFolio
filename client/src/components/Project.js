import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import weather from "../assets/images/weather.png";
import clock from "../assets/images/clock.png";
import todo from "../assets/images/todo.png";
import memories from "../assets/images/memories.png";
import ecommerce from "../assets/images/e-commerce.png";
import Dalle from "../assets/images/Dalle.png"
import realstate from "../assets/images/realstate.png"
import promptopia from "../assets/images/promptopia.png"
import youtube from "../assets/images/youtube.png"

function Project() {
  const projects = [
    {
      img: weather,
      name: "Weather-app ",
      github_link: "https://github.com/hamzabelakri/Weather-app",
      live_link: "https://cloudyday.netlify.app/",
    },
    /* {
      img: clock,
      name: "Digital-Clock-app",
      github_link: "https://github.com/hamzabelakri/Digital-Clock",
      live_link: "https://ourdigitalclock.netlify.app/",
    },
    {
      img: todo,
      name: "ToDo-app",
      github_link: "https://github.com/hamzabelakri/ToDo-app",
      live_link: "https://mydailytask.netlify.app/",
    }, */

    {
      img: realstate,
      name: "Real-Estate",
      github_link: "https://github.com/hamzabelakri/RealEstate_Locofy",
      live_link: "https://realestatelocofy.vercel.app/",
    },
    {
      img: memories,
      name: "Memories-app",
      github_link: "https://github.com/hamzabelakri/Memories",
      live_link: "https://lovelymemories.netlify.app/",
    },
   
    {
      img: ecommerce,
      name: "E-commerce",
      github_link: "https://github.com/hamzabelakri/E-commerce",
      live_link: "https://shopify-tn.netlify.app/",
    },
    {
      img: youtube,
      name: "Youtube-clone",
      github_link: "https://github.com/hamzabelakri/Youtube",
      live_link: "https://youtube-streaming.netlify.app/",
    },
    {
      img: promptopia,
      name: "Promptopia",
      github_link: "https://github.com/hamzabelakri/Promptopia",
      live_link: "https://prompt-universe.vercel.app/",
    },
    {
      img: Dalle,
      name: "DALL-E app",
      github_link: "https://github.com/hamzabelakri/DALL-E-app",
      live_link: "https://dalle-api.netlify.app/",
    },
    
    
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My humble works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center justify-center relative">
        <div className="lg:w-3/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full  p-4 bg-slate-700 rounded-xl">
                  <img
                    src={project_info.img}
                    alt=""
                    className="object-fill	 h-48  rounded-lg"
                  />
                  <h3 className="text-xl text-center my-4">{project_info.name}</h3>
                  <div className="flex justify-center gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
       
      </div>
    </section>
  );
}

export default Project;
