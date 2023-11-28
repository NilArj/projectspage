"use client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineLine } from "react-icons/ai";
import ProjectA from "../projects/ProjectA";
import ProjectB from "../projects/ProjectB";
import ProjectC from "../projects/ProjectC";
import ProjectD from "../projects/ProjectD";

const Project = () => {
  const router = useRouter();
  const [selectedSection, setSelectedSection] = useState("A");

  useEffect(() => {
    if (router.asPath.includes("#")) {
      const section = router.asPath.substring(router.asPath.indexOf("#") + 1);
      setSelectedSection(section);
    }
  }, [router.asPath]);

  const handleSectionChange = (section) => {
    setSelectedSection(section);
    router.push(`/projects#${section}`);
  };

  return (
    <div className="flex flex-col py-8 px-4 sm:py-16 xl:px-16">
      <h1 className="font-extrabold text-center text-[#FFCE63] text-3xl sm:text-5xl lg:text-6xl">
        Project
      </h1>
      <div className="flex text-2xl sm:text-6xl gap-4 justify-center">
        <AiOutlineLine
          onClick={() => handleSectionChange("a")}
          className={`${
            selectedSection === "a" ? "text-[#FFCE63] " : "text-[#060B24]"
          } `}
        />
        <AiOutlineLine
          onClick={() => handleSectionChange("b")}
          className={`${
            selectedSection === "b" ? "text-[#FFCE63]" : "text-[#060B24]"
          }`}
        />
        <AiOutlineLine
          onClick={() => handleSectionChange("c")}
          className={`${
            selectedSection === "c" ? "text-[#FFCE63]" : "text-[#060B24]"
          }`}
        />
        <AiOutlineLine
          onClick={() => handleSectionChange("d")}
          className={`${
            selectedSection === "d" ? "text-[#FFCE63]" : "text-[#060B24]"
          }`}
        />
      </div>

      {selectedSection === "a" && <ProjectA />}

      {selectedSection === "b" && <ProjectB />}

      {selectedSection === "c" && <ProjectC />}

      {selectedSection === "d" && <ProjectD />}
    </div>
  );
};

export default Project;
