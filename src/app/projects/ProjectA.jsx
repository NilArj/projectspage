import React from "react";
import Image from "next/image";

const ProjectA = () => {
  return (
    <section id="a">
      <div className="md:px-6">
        <h2 className="text-[#FFCE63] font-semibold text-center text-lg mt-6 sm:text-2xl">
          EXCEL A
        </h2>
        <h2 className="text-yellow-primary text-center mb-6 text-lg sm:text-2xl">
          Amazon 2022 RFM Analysis
        </h2>
        <p className="text-yellow-primary text-center mb-4 text-base sm:text-xl sm:text-left">
          y objetivo
        </p>
        <p className="text-[#F0F0F0] italic font-serif mb-4 text-base text-center sm:text-xl sm:text-left">
          Las preguntas que me hice
        </p>
        <ul className="text-[#F0F0F0] italic font-serif mb-6 text-base text-center sm:text-xl sm:text-justify">
          <li>one question</li>
          <li>two question</li>
          <li>three question</li>
          <li>four question</li>
        </ul>
        <p className="text-yellow-primary text-center mb-4 text-base sm:text-xl sm:text-left">
          funciones y código
        </p>
        <ul className="text-[#F0F0F0] italic font-serif mb-6 text-base text-center sm:text-justify sm:text-xl">
          <li>one question</li>
          <li>two question</li>
          <li>three question</li>
          <li>four question</li>
        </ul>
        <p className="text-yellow-primary text-center mb-4 text-base sm:text-xl sm:text-left">
          resultado
        </p>
        <ul className="text-[#F0F0F0] italic font-serif mb-6 text-base text-center sm:text-justify sm:text-xl">
          <li>one question</li>
          <li>two question</li>
          <li>three question</li>
          <li>four question</li>
        </ul>
        <a
          href="https://github.com/NilArj/Google_play"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 mx-auto text-[#F0F0F0] text-center text-sm border border-solid border-[#FFCE63] px-5 py-3 w-full font-semibold sm:w-fit md:text-lg hover:bg-gradient-to-br hover:to-[#FFCE63] hover:from-[#0A133D]"
        >
          View on GitHub
        </a>
      </div>
    </section>
  );
};

export default ProjectA;
