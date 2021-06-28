import React from "react";
import {
  AboutWallpaperItems,
  AboutWallpaperH1,
  AboutWallpaperP,
  AboutWallpaperContainer,
} from "./AboutWallpaperElements";

function AboutWallpaperContent() {
  return (
    <div>
      <AboutWallpaperContainer>
        <AboutWallpaperItems>
          <AboutWallpaperH1>Our Team</AboutWallpaperH1>
          <AboutWallpaperP>
            Here at Gym and Fitness, we have a team of approximately forty
            awesome superstars and we owe our success to each and every one of
            them! Because we hire for culture first and foremost, we have some
            pretty awesome people working with us who hustle everyday to give
            you a positive customer experience. You can find them in areas such
            as sales, marketing and ecommerce, customer service, warehousing,
            finance, human resources and management. If you think you’re kind of
            a big deal and interested in joining our team, please send us an
            email with your resume and a little bit about yourself.
          </AboutWallpaperP>
        </AboutWallpaperItems>
      </AboutWallpaperContainer>
    </div>
  );
}

export default AboutWallpaperContent;
