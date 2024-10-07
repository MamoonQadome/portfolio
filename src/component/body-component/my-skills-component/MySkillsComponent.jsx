import React from 'react'
import { SkillsContainer, SkillsWrapper } from './MySkillsStyledComponent'
import { mySkills } from '../../../data/MyData'
import SkillCardComponent from './skill-card-component/SkillCardComponent'

export default function MySkillsComponent() {
  return (
    <SkillsWrapper>
        <SkillsContainer>
            {mySkills.map((skill,index) => (
                <SkillCardComponent key={index} data={skill}/>
            ))}
        </SkillsContainer>
    </SkillsWrapper>
  )
}
