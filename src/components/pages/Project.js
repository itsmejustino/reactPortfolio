import React from "react";
import "../assets/styles/app.css";
import Projects from "./cardOneComponent";
import ProjectTwo from "./cardTwoComponent";
import ProjectThree from "./cardThreeComponent";
import ProjectFour from "./cardFourComponent";
import SkillsComponent from "./skillsComponent";
import ProjectFive from "./cardstarComponent";

export default function ProjectsMain() {
  return (
    <div>
      <div>
        <SkillsComponent />
      </div>
      <h1 className="projectsHeader"> My Projects </h1>
      <div className="projectsDiv">
        <ProjectFive />
        <Projects />
        <ProjectTwo />
        <ProjectThree />
        <ProjectFour/>
      </div>
    </div>
  );
}
