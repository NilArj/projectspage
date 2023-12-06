import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { SiTableau, SiGoogleforms } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact">
      <div className="flex flex-col flex-wrap py-8 px-4 gap-4 xl:gap-16 sm:py-16 xl:px-16">
        <p className="text-white-primary text-justify italic font-light text-base sm:text-2xl md:text-center">
          Thanks for taking the time to explore my portfolio. Your visit is
          greatly appreciated!
        </p>

        <div className="flex text-3xl md:text-5xl justify-evenly sm:gap-4 sm:justify-center">
          <a
            href="https://www.linkedin.com/in/nilarj/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin className="hover:bg-[#FFCE63] hover:rounded-full hover:p-2" />
          </a>
          <a
            href="https://github.com/NilArj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="hover:bg-[#FFCE63] hover:rounded-full hover:p-2" />
          </a>
          <a
            href="https://public.tableau.com/app/profile/nilvia.arjona/vizzes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTableau className="hover:bg-[#FFCE63] hover:rounded-full hover:p-2" />
          </a>
          <a
            href="https://twitter.com/NilArj_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillTwitterCircle className="hover:bg-[#FFCE63] hover:rounded-full hover:p-2" />
          </a>
          <a
            href="https://forms.gle/RDsBCnyK2NM3T3DB8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGoogleforms className="hover:bg-[#FFCE63] hover:rounded-full hover:p-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
