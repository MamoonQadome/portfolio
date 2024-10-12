import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  background-color: var(--header-background-color);
  z-index: 5;
  @media screen and (max-width: 445px) {
    position: relative;
  }
`;

export const Headercontainer = styled.div`
  max-width: 1440px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  height: 100%;


  @media screen and (max-width: 445px) {
    justify-content: space-evenly;
  }
`;

export const HeaderTitle = styled(NavLink)`
  position: relative;
  text-decoration: none;
  color: var(--header-titles-color);
  padding: 5px 20px;
  border-radius: 8px;
  overflow: hidden;
  height: 100%;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 90%;
    width: 0;
    height: 5px;
    background-color: #0a21c0;
    transition: all 0.3s ease;
    transform: translateX(-50%);
    
  }

  &.active,
  &:hover {
    cursor: pointer;
    font-weight: bold;
    color: white;
    padding: 3px 15px;

    &::after {
      width: 80%;
      left: 10%;
      transform: translateX(0);
      pointer-events: none;

    }
  }
`;
