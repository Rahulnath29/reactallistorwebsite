import React, { useState } from "react";
import Navbar from "../../common/Navbar/index";
import Sidebar from "../../common/Sidebar/index";
import {
  SupplementHeroContainer,
  SupplementHeroContent,
  SupplementHeroItems,
  SupplementHeroH1,
  SupplementHeroP,
  SupplementHeroBtn,
} from "./SupplementHeroElements";

const SupplementHero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SupplementHeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <SupplementHeroContent>
        <SupplementHeroItems>
          <SupplementHeroH1>Allistor Labs</SupplementHeroH1>
          <SupplementHeroP>Cross Your Genetics</SupplementHeroP>
          <SupplementHeroBtn>Contact Us</SupplementHeroBtn>
        </SupplementHeroItems>
      </SupplementHeroContent>
    </SupplementHeroContainer>
  );
};

export default SupplementHero;
