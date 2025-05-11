import React, { useState } from "react";
import DoubleCurvedText from "../../DoubleCurvedText";

const HeroBanner = () => {
  const [visibleType, setVisibleType] = useState(null);

  const handleClick = (type) => {
    setVisibleType(type);
  };

  return (
    <section className="relative h-[460px] w-full rounded-4xl">
      <img
        className="h-full w-full rounded-4xl object-cover shadow-md"
        src="../../src/assets/images/bg-1.jpg"
        alt="Hero"
      />

      {/* Decorative background bubble */}
      <div className="absolute -bottom-18 left-1/2 h-32 w-32 -translate-x-1/2 transform rounded-full bg-[--bg-primar-cray]" />

      {/* Clickable button */}
      <div
        className="absolute -bottom-16 left-1/2 flex h-28 w-28 -translate-x-1/2 transform cursor-pointer flex-col items-center justify-center gap-2 rounded-full bg-[--bg-secondary-cray] shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
        onClick={() => handleClick("bottom")} // or "top"
      >
        <i className="fa fa-arrow-up mb-2 rotate-45 text-xl text-white"></i>
      </div>

      {/* Conditional curved text */}
      {visibleType && (
        <div className="absolute top-1 left-1/2 flex w-1/2 -translate-x-1/2 justify-center">
          <DoubleCurvedText type={visibleType} />
        </div>
      )}
    </section>
  );
};

export default HeroBanner;