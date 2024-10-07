import React from "react";
import { ProjectsCardContainer } from "./MyProjectsStyledComponent";
import { myProjectsInformation } from "../../../data/MyData";
import ProjectCardComponent from "./project-card-component/ProjectCardComponent";

export default function MyPorjectsComponent() {
  return (
    <ProjectsCardContainer>
      {myProjectsInformation.map((project) => (
        <ProjectCardComponent key={project.projectName} data={project} />
      ))}
    </ProjectsCardContainer>
  );
}
