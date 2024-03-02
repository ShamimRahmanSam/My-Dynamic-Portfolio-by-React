import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["An Educator.", "A Data Scientist.", "A Web Developer.", "A ML & AI Researcher.", "A Software Engineer.", "An Indie Filmmaker & Writer.", "A Hard Worker & Fast Learner." ],
      loop: true,
      typeSpeed: 25,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi! I'm <span className="text-designColor capitalize">Shamim Rahman Sam</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        A dynamic person with a proven ability to build relationships and inspire a team. <br/>
        Adaptable leadership with the ability to work independently and maintain critical thinking skills in the face of unforeseen challenges. <br/> 
        Self-motivated individual with a strong drive to achieve any target goal. <br/>
        Most importantly a dreamer who wants to pursue his all goals with absolute dedication, sincerity, honesty, and perseverance.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner;