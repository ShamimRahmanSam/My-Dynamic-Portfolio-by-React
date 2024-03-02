import React from 'react'
import Title from '../layouts/Title'
//import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Locating Hospitals for Nearby Houses"
          des="This project is an AI project. I used the Hill-Climbing Search Algorithm by Python programming language to Locate Hospitals for Nearby Houses in any area."
          // src = { }
        />
        <ProjectsCard
          title="Emoji Creator"
          des=" I used some pip tools such as keras, numpy, PIL, os, cv2 and tkinter to create this project."
          // src={ }
        />
        <ProjectsCard
          title="Tetris Game"
          des="I used random and pygame tools to create this game."
          //src={ }
        />
        <ProjectsCard
          title="Maze Solver"
          des=" This project is also an AI project and its motive is to solve a maze quicker by implementing both DFS & BFS Algorithm & to choose which one is better."
        />
        <ProjectsCard
          title="Snake Game"
          des=" I used some pip tools such as pygame, tkinter, math and random to create this Snake game."
        />
        <ProjectsCard
          title="My Portfolio by React"
          des="I used React.js and TailwindCSS to create my portfolio which is dynamic."
          //src={projectpic}
        />
      </div>
    </section>
  );
}

export default Projects;