import styled, {keyframes} from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const CardContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  box-shadow: 0px 0px 5.5px rgba(0, 0, 0, 0.62),
    0px 0px 44px rgba(0, 0, 0, 0.31);
  margin: 15px 0;
  border-radius: 15px;
  animation: ${fadeIn} 1s ease-out both;
  background-color: #949191;

  &:hover {
    & > img,
    & > h2 {
      transform: translateY(-20px);
      color: black;
    }
  }

  @media screen and (max-width: 590px) {
    width: 40%;
  }
  @media screen and (max-width: 410px) {
    width: 80%;
  }
`;

export const SkillImageHolder = styled.img`
  width: 20%;
  transition: transform 0.5s ease;
  padding-top: 10px;
  
`;

export const SkillName = styled.h2`
  transition: transform 0.5s ease;
  margin-bottom: 0;
  color: #000000a6;
`;
