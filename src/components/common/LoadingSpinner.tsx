import React from "react";
import spinner from "../../assets/images/loadingspinner.gif";
import { styled } from "styled-components";

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <SpinnerImage src={spinner} />
    </SpinnerContainer>
  );
};

const SpinnerImage = styled.img`
  width: 150px;
`;

const SpinnerContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default LoadingSpinner;
