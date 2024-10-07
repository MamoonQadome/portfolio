import React from "react";
import {
  Headercontainer,
  HeaderTitle,
  HeaderWrapper,
} from "./HeaderStyledComponent";
import { useNavigate } from "react-router-dom";


export default function HeaderComponent() {
  const navigate = useNavigate();

  const handleTitleClick = (e, path) => {
    if (e.currentTarget.classList.contains("active")) {
      e.preventDefault();
      navigate("/");
    } else {
      navigate(path);
    }
  };
  return (
    
    <HeaderWrapper>
      <Headercontainer>
        <HeaderTitle to="/about" onClick={(e) => handleTitleClick(e, "/about")}>
          About Me
        </HeaderTitle>
        <HeaderTitle
          to="/projects"
          onClick={(e) => handleTitleClick(e, "/projects")}
        >
          My Projects
        </HeaderTitle>
        <HeaderTitle
          to="/skills"
          onClick={(e) => handleTitleClick(e, "/skills")}
        >
          Skills
        </HeaderTitle>
        <HeaderTitle
          to="/contact"
          onClick={(e) => handleTitleClick(e, "/contact")}
        >
          Contact Me
        </HeaderTitle>
      </Headercontainer>
    </HeaderWrapper>
    
  );
}
