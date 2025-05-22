import React from "react";
import myImage from "/profile pic.jpg";
import ProfileSkills from "../Elements/ProfileSkills";
export default function IntroductionSection() {
  return (
    <>
    
    <div className="w-full min-h-screen bg-[#0a0a23] text-white flex flex-col items-center justify-start py-12 px-6">
      <h2 className="text-4xl font-bold mb-12 relative inline-block after:block after:mt-2 after:h-1 after:w-full after:bg-[#FFD700]">
        Introduction
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-12">
        {/* Left - Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={myImage}
            alt="Darshan Malviya"
            className="rounded-2xl shadow-lg max-w-xs object-cover"
          />
        </div>

        {/* Right - Text */}
        <div className="w-full md:w-2/3 text-lg leading-relaxed text-justify">
          <p>
            I'm Darshan Malviya, a passionate full-stack developer specializing
            in the MERN stack. I combine my love for coding with a hands-on
            approach to hardware, creating intelligent systems that bridge the
            digital and physical world. From developing modern web apps like{" "}
            <strong>AgentWise</strong>—a smart CSV-based task allocation
            dashboard—to engineering real-time IoT projects like{" "}
            <strong>prosthetic eye control using ESP32</strong>, I strive to
            bring ideas to life through code, creativity, and technology. With a
            strong foundation in React, Express, and microcontroller
            integration, I’m focused on building seamless, user-driven solutions
            that solve real-world problems. Let's innovate something meaningful
            together.
          </p>
        </div>
      </div>
    </div>
    <div className="w-full min-h-screen bg-[#0a0a23] text-white flex flex-col items-center justify-start py-12 px-6">
    <ProfileSkills />
    </div>
    </>
  );
}
