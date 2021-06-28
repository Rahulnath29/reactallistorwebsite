import React from "react";
import {
  FeatureContainer,
  FeatureContent,
  FeatureH1,
  FeatureP,
} from "./AboutFeatureElements";

function AboutFeature() {
  return (
    <>
      <FeatureContainer>
        <FeatureContent>
          <FeatureH1>Our Story</FeatureH1>
          <FeatureP>
            Our Story Gym and Fitness was founded in 2002 as a family owned and
            operated business. The Gym and Fitness founders didn’t want it to be
            just another gym equipment retailer - they wanted to be the best in
            the industry and set their minds to doing so! Since its birth, Gym
            and Fitness has grown into one of Australia’s largest online fitness
            equipment retailers having helped over 50,000 customers live longer,
            happier and healthier lives
          </FeatureP>
        </FeatureContent>
        <FeatureContent>
          <FeatureH1>What we do</FeatureH1>
          <FeatureP>
            We want to help you live a fit and healthy lifestyle! We do this by
            helping you find the most suitable equipment for your home gym,
            studio or commercial gym, keeping your budget, lifestyle and fitness
            goals in mind. We stock a wide range of gym equipment, with strength
            equipment, cardio, cross training and so much more. Our awesome team
            is always keen to help, so please call us to discuss your needs.
          </FeatureP>
        </FeatureContent>
      </FeatureContainer>
    </>
  );
}

export default AboutFeature;
