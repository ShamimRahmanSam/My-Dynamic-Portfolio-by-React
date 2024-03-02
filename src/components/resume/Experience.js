import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Brand Representative"
            subTitle="DocTime. [01/04/2022-30/07/2022]"
            result="DHAKA"
          />
          <ResumeCard
            title="QA Enginneer"
            subTitle=" Vcube Soft and Tech. [01/10/2021-30/12/2021]" 
            result="DHAKA"
          />
          <ResumeCard
            title="Chief Asst. Director"
            subTitle="Natai Entertainment. [01/11/2020-31/01/2022]"
            result="DHAKA"
          />
        </div>
      </div>
      <div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Lecturer "
            subTitle="SOWARC. [01/02/2019-30/08/2019]"
            result="DHAKA"
          />
          <ResumeCard
            title="Freelance Asst. Director & Casting Director"
            subTitle="Bangladesh Film & TV Commercial Media Industry.[01/12/2015-31/12/2023]"
            result="DHAKA"
          />
          <ResumeCard
            title="Educator"
            subTitle="Private Home Tutor. [01/07/2011-Present]"
            result="DHAKA"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
