import React from "react";
import {
  CardContainer,
  Contributions,
  Description,
  DetailsContainer,
  ImageHolder,
  InformationContainer,
  ProjectHeader,
  SkillsLearned,
} from "./ProjectCardStyledComponent";
export default function ProjectCardComponent({ data }) {
  return (
    <CardContainer>
      <ImageHolder src={data.image} />
      <SkillsLearned>
        Skills Learned:
        {data.skillsLearned.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </SkillsLearned>
      <InformationContainer>
        <DetailsContainer>
          <ProjectHeader  onClick={() => window.open(data.link, "_blank", "noopener")}>{data.projectName}</ProjectHeader>
          <Description>
            <span>Description:</span> {data.description}
          </Description>

          <Contributions>
            Contributions:
            {data.contributions.map((contributions, index) => (
              <li key={index}>{contributions}</li>
            ))}
          </Contributions>
        </DetailsContainer>
      </InformationContainer>
    </CardContainer>
  );
}