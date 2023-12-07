import React from "react";
import Image from "next/image";

const ProjectA = () => {

  return (
    <section id="a">
      <div className="md:px-6 overflow-hidden">
        <h2 className="text-[#FFCE63] font-semibold text-center text-lg mt-6 sm:text-2xl">
          SQL | Power BI
        </h2>
        <h2 className="text-yellow-primary text-center mb-6 text-lg sm:text-2xl">
          Google Play App Development Analysis
        </h2>
        <p className="text-[#F0F0F0] italic font-light underline-offset-4 mb-6 text-base text-justify sm:text-xl">
          A developer is on the brink of creating a new app but faces the
          daunting task of choosing the right type of app. To make an informed
          decision, I dive into the world of the Android app store, using
          Python, MySQL and Power BI to analyze trends and insights.
        </p>
        <p className="text-yellow-primary text-center mb-4 text-base sm:text-xl sm:text-left">
          Questions & Analysis
        </p>
        <ul className="text-[#F0F0F0] italic font-light list-disc pl-8 mb-4 text-base text-justify sm:text-xl sm:pl-16">
          <li className="mb-2">
            Identification of the most popular app categories in the Android
            store
          </li>
          <li className="mb-2">
            Deciphering the pricing strategy that ensures app success
          </li>
          <li>
            Exploring ways to boost an {`app's`} performance through higher user
            ratings
          </li>
        </ul>
        <div className="text-center">
          <Image
            src="/googleplay.png"
            alt="Google play dashboard"
            layout="responsive"
            width={5}
            height={2.5}
            objectFit="cover"
            className="mx-auto mb-4"
          />
          <a
            href="https://github.com/NilArj/Google_play"
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
            A Python script was used to transfer data to the database
          </li>
          <li className="mb-2">
            MySQL was used to analyze the data set using SQL queries
          </li>
          <li>
            Power BI was used to create a user-friendly dashboard for easy
            visualization
          </li>
        </ul>
        <p className="text-yellow-primary text-center mb-4 text-base sm:text-xl sm:text-left">
          Findings for the Ultimate Verdict
        </p>
        <ul className="text-[#F0F0F0] italic font-light list-disc pl-8 mb-6 text-base text-justify sm:text-xl sm:pl-16">
          <li className="mb-2">
            Paid apps boast higher ratings but face challenges in gaining high
            installation rates
          </li>
          <li className="mb-2">
            Certain categories like dating, maps and navigation, tools, video
            players, and lifestyle appear underserved, pointing toward potential
            opportunities
          </li>
          <li className="mb-2">
            To stand out, a new app should aim for a rating above 4.19
          </li>
          <li>
            Categories like communication, social, video player, productivity,
            and gaming appear saturated due to high app volumes
          </li>
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
