import React from "react";
import { FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="flex justify-between flex-wrap py-8 px-4 gap-4 bg-blue-secondary mx-0">
      <div className="flex gap-2 justify-center">
        <FiMapPin />
        Yucatan, Mexico
      </div>
      <p>© All rights reserved.</p>
    </div>
  );
};

export default Footer;
