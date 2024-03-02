import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
//import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Shamim Rahman Sam</h3>
        <p className="text-base text-gray-400 tracking-wide">
          Dhaka, Bangladesh.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+8801682636438</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">shamimrahmansam.srs@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
          <span className="bannerIcon">
            <FaGithub />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft;