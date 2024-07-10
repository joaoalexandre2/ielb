import React from "react";
import Bannerlogo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="rounded-t-3xl bg-gradient-to-r from-violet-950 to-violet-900">
      <section className="mx-auto max-w-[1200px] text-white">
        <div className=" grid py-5 md:grid-cols-3">
          <div className=" px-4 py-8 ">
            <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-3xl">
            <a href="/#home" className="">
              <img
                src={Bannerlogo}
                alt="No image"
                className="hover:drop-shadow-md w-1/2 md:w-auto"
              />
            </a>
            </h1>
            <p className="">
            
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>R. Min. Petrônio Portela, 90 - Jardim Panorama, Toledo - PR</p>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <FaMobileAlt />
              <p>(45) 3055-3060</p>
            </div>
            {/* Social Handle */}
          </div>
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10 ">
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Links Importantes
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Editora Concordia
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    JELB
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    ANEL
                  </li>
                 
                </ul>
              </div>
            </div>
            <div className="">
              
            </div>
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Social Links
                </h1>
                <div className="flex flex-col gap-3">
                  <h1>Subscribe to our newsletter</h1>
                  <input
                    className="rounded-full px-3 py-1 text-black focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 "
                    type="text"
                    placeholder="Email"
                  />
                  <div className="mt-6 flex items-center gap-3">
                    <a href="#" className="duration-200 hover:scale-105">
                      <FaInstagram className="text-3xl" />
                    </a>
                    <a href="#" className="duration-200 hover:scale-105">
                      <FaFacebook className="text-3xl" />
                    </a>
                    <a href="#" className="duration-200 hover:scale-105">
                      <FaLinkedin className="text-3xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border-t-2 border-gray-300/50 py-6 text-center">
            @copyright 2024 || João Kirst
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
