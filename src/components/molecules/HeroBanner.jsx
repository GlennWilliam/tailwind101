import React, { useState } from "react";

const HeroBanner = () => {
  const [showText, setShowText] = useState(false);

  const handleText = () => {
    setShowText(!showText);
  };

  return (
    <section className="relative h-[460px] w-full rounded-4xl">
      <img
        className="h-full w-full rounded-4xl object-cover shadow-md"
        src="/images/bg-1.jpg"
        alt="hero banner"
      />
      <div className="absolute -bottom-18 left-1/2 h-32 w-32 -translate-x-1/2 transform rounded-full bg-[--bg-primary-cray]" />

      <div
        className="absolute -bottom-16 left-1/2 flex h-28 w-28 -translate-x-1/2 transform cursor-pointer flex-col items-center justify-center gap-2 rounded-full bg-[--bg-secondary-cray] shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
        onClick={handleText}
      >
        {showText && (
          <div className="absolute top-1 left-1/2 flex h-27 w-27 -translate-x-1/2 transform flex-col items-center justify-center gap-2 rounded-full bg-white text-black text-sm">
            Text appears here!
          </div>
        )}
        <i className="fa fa-arrow-up mb-2 rotate-45 text-xl text-white"></i>
      </div>
    </section>
  );
};

export default HeroBanner;