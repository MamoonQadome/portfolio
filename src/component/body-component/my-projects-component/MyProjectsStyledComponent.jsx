import styled, { keyframes } from "styled-components";

const fadeInAndSlideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ProjectsCardContainer = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  animation: ${fadeInAndSlideUp} 0.6s ease-out both;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
  }
`;
