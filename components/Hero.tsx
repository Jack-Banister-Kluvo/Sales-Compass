
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="px-6 py-20 max-w-7xl mx-auto">
      <div className="max-w-4xl">
        <span className="text-[#2EA3F2] font-semibold tracking-wider uppercase text-sm mb-4 block">
          B2B Sales Outsourcing & Lead Gen Intelligence
        </span>
        <h1 className="text-[#222222] mb-8 leading-[1.1]">
          The Ultimate Guide to <span className="text-[#FF2B52]">Outsourced Sales</span> and Pipeline Generation.
        </h1>
        <p className="text-[#222222] text-lg md:text-xl opacity-80 max-w-2xl">
          Independent comparisons of SDR agencies, telemarketing firms, and the latest trends in B2B pipeline growth. No fluff, just the data you need to scale.
        </p>
      </div>
    </section>
  );
};

export default Hero;
