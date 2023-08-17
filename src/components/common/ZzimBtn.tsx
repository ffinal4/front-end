import React, { useState } from "react";
import zzim from "../../assets/icon/zzim.png";
import nozzim from "../../assets/icon/nozzim.png";
import { styled } from "styled-components";

const CardZzimBtn = () => {
  const [isZzim, setIsZzim] = useState(false);

  const zzimBtnhandleClick = () => {
    setIsZzim(!isZzim);
  };

  return (
    <ZzimBtnContainer>
      <ZzimBtn src={isZzim ? zzim : nozzim} onClick={zzimBtnhandleClick} />
    </ZzimBtnContainer>
  );
};

const ZzimBtn = styled.img`
  width: 100%;
`;

const ZzimBtnContainer = styled.div`
  background: var(--black-white-white, #fcfcfc);
  width: 48px;
  height: 48px;
  border-radius: 10px 0px;
  position: absolute;
  top: 226px;
  right: 0;
  z-index: 99;
  padding: 6px;
  cursor: pointer;
`;

export default CardZzimBtn;
