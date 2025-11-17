import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row h-[500px] sm:h-[600px] border border-gray-400">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR GENZ COLLECTION</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            IS OUT NOW
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      {/* Hero Right Side - Video */}
      <div className="w-full sm:w-1/2 h-full">
        <video
          className="w-full h-full object-cover"
          src="/video.mp4"
          muted
          loop
          autoPlay
          playsInline
        />
      </div>
    </div>
  );
};

export default Hero;
