import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    width: 0;
  }

  100% {
    width: 60%;
  }
`;

const rightSideFadeIn = keyframes`
  0% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const ContactMeContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

export const LeftSideContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const ContactMeImage = styled.img`
  animation: ${fadeIn} 1s forwards;
`;

export const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  padding-top: 50px;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
`;

export const IconWrapper = styled.a`
  width: 10%;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
  }
  & > img {
    width: 100%;
    cursor: pointer;
  }
`;

export const RightSideContainer = styled.div`
  width: 50%;
  height: max-content;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const ContactMeForm = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  height: max-content;
  animation: ${rightSideFadeIn} 0.5s ease-in-out;
`;

export const InputFeild = styled.input`
  width: 40%;
  height: 60px;
  background-color: var(--input-background-color);
  color: var(--input-font-color);
  border: none;
  border-radius: 8px;
  margin: 10px 10px;
  padding-left: 30px;
  &:placeholder-shown {
    padding-left: 30px;
  }

  &:focus {
    outline: none;
    border: 1px solid var(--focus-input-border-color);
    background-color: var(--focus-input-background-color);
  }

  &:is(-webkit-autofill, :autofill) {
    transition: background-color 0s 600000s, color 0s 600000s !important;
    border: 3px solid var(--input-background-color);
  }

  @media screen and (max-width: 1159px) {
    width: 40%;
    margin: 10px 0;
  }

  @media screen and (max-width: 440px) {
    width: 35%;
  }

  @media screen and (max-width: 400px) {
    width: 80%;
  }
  
`;

export const InputMessage = styled.textarea`
  width: 85%;
  height: 150px;
  background-color: var(--input-background-color);
  color: var(--input-font-color);
  border: none;
  border-radius: 8px;
  margin: 10px 10px;
  padding: 15px 30px;
  text-align: start;
  resize: none;
  font-family: inherit;

  &::-webkit-scrollbar {
    display: none;
  }

  &:placeholder-shown {
    padding-left: 30px;
  }

  &:focus {
    outline: none;
    border: 1px solid var(--focus-input-border-color);
    background-color: var(--focus-input-background-color);
  }

  &:is(-webkit-autofill, :autofill) {
    transition: background-color 0s 600000s, color 0s 600000s !important;
    border: 3px solid var(--input-background-color);
  }
`;

export const SendEmailButton = styled(({ clickable, ...props }) => (
  <div {...props} />
))`
  width: 85%;
  background-color: ${({clickable}) =>
    clickable ? "grey" : "var(--input-background-color)"};
  height: max-content;
  padding: 10px 30px;
  border-radius: 8px;
  transition: background-color 0.5s ease;

  &:hover {
    cursor: ${({clickable}) => (clickable ? "not-allowed" : "pointer")};
    background-color: ${ ({clickable}) => clickable? "" : "var(--hove-submit-button)"};
  }

  & > span {
    cursor: ${({clickable}) => (clickable ? "not-allowed" : "pointer")};
    color: var(--submit-button-text);
  }
`;

