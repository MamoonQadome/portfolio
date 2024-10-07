import React from 'react';
import { BodyContainer, BodyWrapper } from './BodyStyledComponent';
import AboutMeComponent from './about-me-component/AboutMeComponent';
import { Routes, Route, Navigate } from 'react-router-dom'; 
import MyPorjectsComponent from './my-projects-component/MyPorjectsComponent';
import MySkillsComponent from './my-skills-component/MySkillsComponent';
import ParticlesComponent from '../particles/ParticlesComponent';
import ContaceMeComponent from './contact-me-component/ContaceMeComponent';




export default function BodyComponent() {
  return (
   <BodyWrapper>
   <ParticlesComponent id="particles" />
    <BodyContainer>
        <Routes>
            <Route path="/" element={<Navigate to="/about" />} />
            <Route path='/about'  element={<AboutMeComponent />}/>
            <Route path='/projects' element={<MyPorjectsComponent/>}/>
            <Route path='/skills' element={<MySkillsComponent/>} />
            <Route path='/contact' element={<ContaceMeComponent/>} />

        </Routes>
    </BodyContainer>
   </BodyWrapper>
  );
}
