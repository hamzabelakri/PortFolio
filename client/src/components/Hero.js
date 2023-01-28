import React from "react";
import hero from "../assets/images/hero.png";

function Hero() {
  return (
    <section
      id="home"
      className="-mt-4 sm:mt-2 min-h-screen flex py-10  flex-col "
    >
      <div className="flex-1 flex items-center justify-center">
        <div className=" text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            This is <span>Hamza Belakri</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer
          </h4>
          <div class="flex justify-center">
            <button className="btn-primary mt-8 ">Contact Me</button>
          </div>
          <div>
            <ul className="mt-8 text-3xl flex items-center  justify-center gap-5">
              <li className="text-gray-600 hover:text-white cursor-pointer ">
                <a href="https://discord.com/channels/@me" target="_blank">
                  <ion-icon name="logo-discord"></ion-icon>
                </a>
              </li>
              {/* <li className="text-gray-600 hover:text-white cursor-pointer ">
                <ion-icon name="logo-facebook"></ion-icon>
              </li> */}
              <li className="text-gray-600 hover:text-white cursor-pointer ">
                <a
                  href="https://www.linkedin.com/in/belakri-hamza/"
                  target="_blank"
                >
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
              <li className="text-gray-600 hover:text-white cursor-pointer ">
                <a href="https://github.com/hamzabelakri" target="_blank">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

{
  /* <section
id="home"
className="mt-2 min-h-screen flex py-10 md:flex-row flex-col items-center"
>
<div className="flex-1 flex items-center justify-center h-full">
  <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
</div>
<div className="flex-1">
  <div className="md:text-left text-center">
    <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
      <span className="text-cyan-600 md:text-6xl text-5xl">
        Hello!
        <br />
      </span>
      This is <span>Hamza Belakri</span>
    </h1>
    <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
      Fullstack Developer
    </h4>
    <button className="btn-primary mt-8">Contact Me</button>

    <div>
      <ul className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
        <li className="text-gray-600 hover:text-white cursor-pointer ">
          <a href="https://discord.com/channels/@me" target="_blank">
            <ion-icon name="logo-discord"></ion-icon>
          </a>
        </li>
        <li className="text-gray-600 hover:text-white cursor-pointer ">
          <ion-icon name="logo-facebook"></ion-icon>
        </li> 
        <li className="text-gray-600 hover:text-white cursor-pointer ">
          <a
            href="https://www.linkedin.com/in/belakri-hamza/"
            target="_blank"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li className="text-gray-600 hover:text-white cursor-pointer ">
          <a href="https://github.com/hamzabelakri" target="_blank">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
</section> */
}
