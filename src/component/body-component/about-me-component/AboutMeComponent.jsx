import React, { useState } from "react";
import {
  AboutMeContainer,
  DownloadButton,
  DownloadLink,
  Paragraph,
  Picture,
  RightSideContainer,
} from "./AboutMeStyledComponent";
import { aboutMeParagraph } from "../../../data/MyData";

export default function AboutMeComponent() {
  const [isClicked, setIsClicked] = useState(false);

  const handleSetIsClicked = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 500);
  };

  return (
    <AboutMeContainer>
      <Picture src={`${process.env.PUBLIC_URL}/Mamoun_pic2.png`} />
      <RightSideContainer>
        <Paragraph>{aboutMeParagraph}</Paragraph>
        <DownloadButton>
          <DownloadLink
            href="CV.pdf"
            onClick={handleSetIsClicked}
            isClicked={isClicked}
            download
          >
            Download My CV
          </DownloadLink>
        </DownloadButton>
      </RightSideContainer>
    </AboutMeContainer>
  );
}
