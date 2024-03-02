import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Data Science"
            result="Success"
          />
          <ResumeCard
            title="Python Core"
            result="Success"
            />
          <ResumeCard
            title="Responsive Web Design"
            result="Success"
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="SQL"
            result="Success"
            />
          <ResumeCard
            title="JavaScript Algorithms and Data Structures"
            result="Success"
          />
          <ResumeCard
            title="Introduction of Artificial Intelligence"
            result="Success"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
