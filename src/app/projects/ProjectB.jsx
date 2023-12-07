import React from "react";
import Image from "next/image";

const ProjectB = () => {
  return (
    <section id="b">
      <div className="md:px-6 overflow-hidden">
        <h2 className="text-[#FFCE63] font-semibold text-center text-lg mt-6 sm:text-2xl">
          EXCEL
        </h2>
        <h2 className="text-yellow-primary text-center mb-6 text-lg sm:text-2xl">
          Amazon 2022 RFM Analysis
        </h2>
        <p className="text-[#F0F0F0] italic font-light underline-offset-4 mb-6 text-base text-justify sm:text-xl">
          Ever wondered who your customers really are? This project dives into
          the world of customer behavior at Amazon. Our goal is simple: to
          uncover the secrets behind how customers shop, how often they return,
          and what drives their spending habits.
        </p>
        <p className="text-yellow-primary text-center mb-4 text-base sm:text-xl sm:text-left">
          Questions & Analysis
        </p>
        <ul className="text-[#F0F0F0] italic font-light list-disc pl-8 mb-4 text-base text-justify sm:text-xl sm:pl-16">
          <li className="mb-2">
            Unravel the diverse profiles and segment them into identifiable
            groups
          </li>
          <li className="mb-2">Illuminate the spending behaviors</li>
          <li>
            Discern the customers return cycles and the rhythm of their
            engagement with the marketplace
          </li>
        </ul>
        <div className="text-center">
          <Image
            src="/amazon2022.gif"
            alt="Amazon dashboard"
            layout="responsive"
            width={2}
            height={1}
            objectFit="cover"
            className="mx-auto mb-4"
          />
          <a
            href="https://github.com/NilArj/Amazon_sales"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F0F0F0] italic font-light text-base sm:text-xl hover:underline hover:text-[#FFCE63]"
          >
            Full dashboard on GitHub
          </a>
        </div>

        <p className="text-yellow-primary text-center mt-6 mb-4 text-base sm:text-xl sm:text-left">
          A Journey Through Tools & Code
        </p>
        <ul className="text-[#F0F0F0] italic font-light list-disc pl-8 mb-6 text-base text-justify sm:text-xl sm:pl-16">
          <li className="mb-2">
            Excel was used to analyze and to create a user-friendly dashboard
          </li>
          <li className="mb-2">
            Pivot Tables, Graphs & Formatting, Slicers, Data manipulation,
            Aggregate functions, Vlookup
          </li>
        </ul>
        <p className="text-yellow-primary text-center mb-4 text-base sm:text-xl sm:text-left">
          Findings for the Ultimate Verdict
        </p>
        <ul className="text-[#F0F0F0] italic font-light list-disc pl-8 mb-6 text-base text-justify sm:text-xl sm:pl-16">
          <li className="mb-2">
            At Risk - 23.17% of customers. They demand immediate attention for
            retention efforts
          </li>
          <li className="mb-2">
            Champions - Fewer but high spenders, averaging $820 per purchase
          </li>
          <li className="mb-2">
            Each customer contributed an average of $649.67 to the revenue
          </li>
        </ul>
        <a
          href="https://github.com/NilArj/Amazon_sales"
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

export default ProjectB;
