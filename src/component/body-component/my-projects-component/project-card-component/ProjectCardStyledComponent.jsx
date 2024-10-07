import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInSlideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }

`;

export const CardContainer = styled.div`
  width: 45%;
  display: flex;
  position: relative;
  overflow: visible;
  animation: ${fadeIn} 0.6s ease-in-out both;
  &:hover {
    & > img,
    & > div,
    & > ul {
      transform: translateY(-10px);
    }
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const ImageHolder = styled.img`
  width: 35%;
  position: absolute;
  top: 5%;
  left: 0%;
  z-index: 1;
  transition: transform 0.3s ease;
  animation: ${fadeInSlideDown} 0.7s ease-out both;
`;

export const InformationContainer = styled.div`
  width: 100%;
  margin-top: 20%;
  display: flex;
  background-color: #949191;
  border-radius: 20px;
  box-shadow: 4.5px 4.5px 4.8px rgba(0, 0, 0, 0.066),
    12.5px 12.5px 13.1px rgba(0, 0, 0, 0.095),
    30.1px 30.1px 31.7px rgba(0, 0, 0, 0.124),
    100px 100px 105px rgba(0, 0, 0, 0.19);
  transition: transform 0.3s ease;
  z-index: 0;
  padding-bottom: 20px;
  justify-content: end;
`;

export const DetailsContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const ProjectHeader = styled.h3`
  color: #130275fd;
  margin-bottom: 10px;
  cursor: pointer;
  width: fit-content;
`;

export const Description = styled.p`
  margin: 0;
  padding-right: 30px;
  font-size: 12px;

  & > span {
    font-weight: 500;
  }
`;

export const SkillsLearned = styled.ul`
  position: absolute;
  width: 35%;
  margin: 0;
  padding: 0;
  bottom: 2%;
  left: 3%;
  font-weight: 500;
  font-size: 12px;
  transition: transform 0.3s ease;
  list-style-type: none;
  z-index: 2;

  & > li {
    font-weight: 400;
    font-size: 14px;
    color: #000000;
    padding-bottom: 10px;
  }
`;

export const Contributions = styled.ul`
  list-style-type: none;
  padding: 0;

  & > li {
    font-size: 13px;
    padding-bottom: 10px;
  }
`;
