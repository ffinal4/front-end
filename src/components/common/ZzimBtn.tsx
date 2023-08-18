import React, { useState } from "react";
import zzim from "../../assets/icon/zzim.png";
import nozzim from "../../assets/icon/nozzim.png";
import { styled } from "styled-components";
import { useMutation, useQueryClient } from "react-query";
import { postZzimApi } from "../../api/goods";

const CardZzimBtn = () => {
  const queryClient = useQueryClient();
  const [isZzim, setIsZzim] = useState(false);
  // const zzimMutate = useMutation(()=> postZzimApi())
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
