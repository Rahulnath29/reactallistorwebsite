import styled from "styled-components";

export const FeatureContainer = styled.div`
  padding: 110px 90px;
  display: flex;

  justify-content: center;
  @media screen and (max-width: 650px) {
    flex-direction: column;
    padding: 25px;
  }
`;

export const FeatureContent = styled.div`
  padding: 15px;
`;

export const FeatureH1 = styled.h1`
  box-shadow: 3px 5px #b30000;
  width: 200px;
`;

export const FeatureP = styled.p`
  font-weight: lighter;
  margin-top: 30px;
  font-size: 1rem;
`;
