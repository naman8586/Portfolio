import React from "react";
import Image from "next/image";
import { assets, infoList, toolsData } from "@/assets/assets";

const About = ({ isDarkMode }) => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20 mt-20">
      <h4 className="text-center mb-2 lg:text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About Me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
      
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.pro_file}
            alt="User Image"
            className="w-full rounded-full"
          />
        </div>

       
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
          I hold a Bachelor’s degree in Applied Arts from the College of Art, Delhi.where I learned how design can communicate ideas and shape experiences.For me, design is more than just making things look good—it’s about creating visuals that are clear, meaningful, and engaging. I focus on storytelling, functionality, and aesthetics to ensure my work connects with people and serves a purpose. Whether it’s branding, digital design, or user interfaces, my goal is to craft designs that leave a lasting impact.
          </p>

         
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                className={`border-[0.5px] rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-lg ${
                  isDarkMode
                    ? "border-white hover:shadow-white hover:bg-darkHover/50"
                    : "border-gray-400 hover:bg-lightHover hover:shadow-black"
                }`}
                key={index}
              >
                <Image
                  className="w-7 mt-3"
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                />
                <h3
                  className={`my-4 font-semibold ${
                    isDarkMode ? "text-white" : "text-gray-700"
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`${
                    isDarkMode ? "text-white/80" : "text-gray-600"
                  }`}
                >
                  {description}
                </p>
              </li>
            ))}
          </ul>

        
          <h4
            className={`my-6 font-Ovo ${
              isDarkMode ? "text-white/80" : "text-gray-700"
            }`}
          >
            Tools I Use
          </h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                className={`flex items-center justify-center w-20 sm:w-14 aspect-square border rounded-lg cursor-pointer hover:-translate-y-1 duration-500 ${
                  isDarkMode ? "border-gray-500" : "border-gray-400"
                }`}
                key={index}
              >
                <Image src={tool} className="w-10 sm:w-7" alt={`Tool ${index}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
