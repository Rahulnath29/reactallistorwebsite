import styled from "styled-components";
import AboutWall from "../../../Images/AboutWall.jpg";

export const AboutWallpaperContainer = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${AboutWall});
  height: 100vh;
  background-position: center;
  background-size: cover;
  @media screen and (max-width: 650px) {
    background-position: right -60px bottom 0px;
    background: linear-gradient(rgba(0, 0, 0, 10));
  }
`;

export const AboutWallpaperItems = styled.div`
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

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const AboutWallpaperH1 = styled.h1`
  font-size: clamp(2rem, 5vw, 4rem);
  margin-bottom: 5rem;
  box-shadow: 3px 5px #b30000;
  letter-spacing: 3px;
`;

export const AboutWallpaperP = styled.p`
  font-size: clamp(1.2rem, 2vw, 1rem);
  margin-bottom: 5rem;
`;
