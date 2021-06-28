import React from "react";
import AboutHero from "../AboutComponents/AboutHero/index";
import AboutFeature from "../AboutComponents/AboutFeature/index";
import AboutFooter from "../common/Footer/index";
import AboutWallpaperContent from "../AboutComponents/AboutWallpaperContent/index";

function About() {
  return (
    <div>
      <AboutHero />
      <AboutFeature />
      <AboutWallpaperContent />
      <AboutFooter />
    </div>
  );
}

export default About;
