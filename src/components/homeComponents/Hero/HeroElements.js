import styled from "styled-components";
import HomeHero from "../../../Images/HomeHero.jpg";

export const HeroContainer = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${HomeHero});
  height: 100vh;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 650px) {
    height: 85vh;
    @media screen and (max-width: 650px) {
      background-position: right 10px bottom 0px;
    }
  }
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;

  line-height: 1;
  font-weight: bold;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #b30000;
  letter-spacing: 3px;
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #b30000;
  color: #fff;
  transition: 0.2s ease-out;
  &:hover {
    background: white;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;