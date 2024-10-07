import styled, { keyframes, css } from "styled-components";

const flipAnimation = keyframes`
  45% {
    transform: perspective(600px) rotateY(0deg); /* Start position */
  }
  50% {
    transform: perspective(600px) rotateY(180deg); /* Halfway through */
  }
  55% {
    transform: perspective(600px) rotateY(360deg); /* End position */
  }

`;

const popUp = keyframes`
  0% {
    opacity: 0; 
    transform: translateY(100px);
  }
  100% {
    opacity: 1; 
    transform: translateY(0);
  }
`;

const leftSideFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const rightSideFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AboutMeContainer = styled.div`
  width: 90%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  z-index: 2;

  @media screen and (max-width: 470px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Picture = styled.img`
  width: 25%;
  height: fit-content;
  border: 6px solid var(--header-background-color);
  margin: 80px 0 10px 0;
  border-radius: 500px;
  box-shadow: 30px 30px 10px rgba(46, 23, 23, 0.5);
  animation: ${rightSideFadeIn} 0.5s ease-out both,
    ${flipAnimation} 60s linear infinite;

  @media screen and (max-width: 470px) {
    width: 80%;
  }
`;

export const RightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
  margin-top: 10%;
  animation: ${leftSideFadeIn} 0.5s ease-out both;

  @media screen and (max-width: 470px) {
    width: 80%;
  }
`;

export const Paragraph = styled.p`
  width: 90%;
  margin: 0;

  @media screen and (max-width: 470px) {
    padding-left: 30px;
  }
`;

export const DownloadButton = styled.div`
  width: 100%;
  padding: 40px 0;
  height: max-content;
  text-align: center;
`;

export const DownloadLink = styled(({ isClicked, ...props }) => (
  <a {...props} />
))`
  text-decoration: none;
  background-color: var(--header-background-color);
  padding: 10px 20px;
  border-radius: 15px;
  color: var(--header-titles-color);
  box-shadow: 5px 5px 0px #151447a9;

  animation: ${({ isClicked }) =>
    isClicked
      ? css`
          ${popUp} 0.5s ease-out forwards
        `
      : "none"};

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 230px) {
    visibility: hidden;
    position: relative;
    &:after {
      visibility: visible;
      position: absolute;
      top: 0;
      left: 30%;
      text-decoration: none;
      background-color: var(--header-background-color);
      padding: 10px 20px;
      border-radius: 15px;
      color: var(--header-titles-color);
      box-shadow: 5px 5px 0px #151447a9;

      animation: ${({ isClicked }) =>
        isClicked
          ? css`
              ${popUp} 0.5s ease-out forwards
            `
          : "none"};

      content: "My CV";
    }
  }
`;
