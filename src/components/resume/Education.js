import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2003 - 2021</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science and Engineering"
            subTitle="Bangladesh University (2016 - 2021)"
            result="3.16/4"
            des="  Courses: Programming, Software Engineering, Web Programming, Data Structures & Algorithms, Differential and Integral Calculus, Co-ordinate Geometry & Linear Algebra, Statistics and Probability, Digital Image Processing, Artificial Intelligence & More.."
          />
          <ResumeCard
            title="HSC"
            subTitle="B.A.F Shaheen College, Dhaka. (2013 - 2015)"
            result="4.75/5"
            des="Group: Science"
          />
          <ResumeCard
            title="SSC"
            subTitle=" Mohammadpur Govt. High School, Dhaka. (2003 - 2013)"
            result="5.00/5"
            des="Group: Science"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education;