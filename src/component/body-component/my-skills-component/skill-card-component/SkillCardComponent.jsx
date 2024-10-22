import React from 'react';
import { CardContainer, SkillImageHolder, SkillName } from './SkillCardStyledComponent';

export default function SkillCardComponent({ data }) {
  return (
    <CardContainer>
      <SkillImageHolder src={`${process.env.PUBLIC_URL}/${data.image}`} alt={data.name} />
      <SkillName>
        {data.name}
      </SkillName>
    </CardContainer>
  );
}
