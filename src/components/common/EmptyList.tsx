import React from "react";
import { styled } from "styled-components";
import Empty from "../../assets/images/emptyList.png";
import { useNavigate } from "react-router-dom";

const EmptyList = () => {
  const navigate = useNavigate();

  return (
    <EmptyImageContainer>
      <EmptyImage src={Empty} />
      <HiddenButton onClick={() => navigate("/")} />
    </EmptyImageContainer>
  );
};

const EmptyImageContainer = styled.div`
  width: 100%;
  padding: 150px 0px 150px 0px;
  display: flex;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 500px) {
    width: 486px;
    height: 350px;
    padding: 50px 0px 50px 0px;
  }
`;

const EmptyImage = styled.img`
  width: 718px;
  height: 305px;
  object-fit: contain;

  @media screen and (max-width: 500px) {
    width: 455px;
    height: 350px;
  }
`;

const HiddenButton = styled.div`
  cursor: pointer;
  width: 175px;
  height: 44px;
  position: absolute;
  top: 320px;
  left: 209px;
  z-index: 100;

  @media screen and (max-width: 500px) {
    width: 82px;
    height: 20px;
    top: 185px;
    left: 8px;
  }
`;

export default EmptyList;
