import React from "react";
import "../assets/styles/app.css";
import Projects from "./cardOneComponent";
import ProjectTwo from "./cardTwoComponent";
import ProjectThree from "./cardThreeComponent";
import ProjectFour from "./cardFourComponent";
import SkillsComponent from "./skillsComponent";

export default function ProjectsMain() {
  return (
    <div>
      <div>
        <SkillsComponent />
      </div>
      <h1 className="projectsHeader"> My Projects </h1>
      <div className="projectsDiv">
     
        <Projects />
        <ProjectTwo />
        <ProjectThree />
        <ProjectFour/>
      </div>
    </div>
  );
}
