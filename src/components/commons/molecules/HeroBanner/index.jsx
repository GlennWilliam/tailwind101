import React from "react";
import { useNavigate } from "react-router-dom";
import CardMedium from "../../atoms/CardMedium";
import DoubleCurvedText from "../../atoms/DoubleCurvedText";

const HeroBanner = () => {
  const navigate = useNavigate();

  const handleText = (type) => {
    return (
      <div className="absolute top-1 left-1/2 flex h-27 w-27 -translate-x-1/2 transform flex-col items-center justify-center gap-2 rounded-full">
        <DoubleCurvedText type={type} />
      </div>
    );
  };

  return (
    <section className="relative h-[460px] w-full rounded-4xl">
      {/* Background image */}
      <img
        className="h-full w-full rounded-4xl object-cover shadow-md"
        src="../../src/assets/images/bg-1.jpg"
        alt="Hero Banner"
      />

      {/* Bottom circular background */}
      <div className="absolute -bottom-18 left-1/2 h-32 w-32 -translate-x-1/2 transform rounded-full bg-[--bg-primary-cray]" />

      {/* Center button that shows curved text */}
      <div
        className="absolute -bottom-16 left-1/2 flex h-28 w-28 -translate-x-1/2 transform cursor-pointer flex-col items-center justify-center gap-2 rounded-full bg-[--bg-secondary-cray] shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
        onClick={() => {}}
      >
        {handleText("top")}
        <i className="fa fa-arrow-up mb-2 rotate-45 text-xl text-white"></i>
        {handleText("bottom")}
      </div>

      {/* Right side medium cards */}
      <div className="absolute right-4 bottom-4 flex flex-col gap-4 max-md:bottom-14">
        <CardMedium
          title="About"
          bgImg="/images/dea-afrizal-about.png"
          onClick={() => navigate("/about")}
        />
        <CardMedium
          title="Skills"
          bgImg="/images/dea-afrizal-skills.png"
          onClick={() => navigate("/about")} // Consider changing to "/skills"
        />
      </div>
    </section>
  );
};

export default HeroBanner;