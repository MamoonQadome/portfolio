import React from 'react'
import { CardContainer, SkillImageHolder, SkillName } from './SkillCardStyledComponent'

export default function SkillCardComponent({data}) {
  return (
    <CardContainer>
        <SkillImageHolder src={data.image}/>
        <SkillName>
            {data.name}
        </SkillName>
    </CardContainer>
  )
}
