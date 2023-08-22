import React, { useEffect, useState } from "react";
import zzim from "../../assets/icon/zzim.png";
import auctionzzim from "../../assets/icon/auctionzzim.png";
import nozzim from "../../assets/icon/nozzim.png";
import { styled } from "styled-components";
import { useMutation, useQueryClient } from "react-query";
import { postZzimApi } from "../../api/goods";
import { StBasicButton } from "../../styles/BasicButton";

const CardZzimBtn = ({ checkZzim, goodsId, isCard, isAuction, buttonColor, fontColor }: any) => {
  const queryClient = useQueryClient();
  const [isZzim, setIsZzim] = useState(false);
  const zzimMutate = useMutation(() => postZzimApi({ goodsId: goodsId }), {
    onSuccess: (res) => {
      console.log("찜성공!", res);
      setIsZzim(!isZzim);
    },
  });
  const zzimBtnhandleClick = () => {
    zzimMutate.mutate();
  };

  useEffect(() => {
    setIsZzim(checkZzim);
  }, []);

  return (
    <div>
      {isCard ? (
        <ZzimBtnContainer>
          {isAuction ? (
            <ZzimBtn src={isZzim ? auctionzzim : nozzim} onClick={zzimBtnhandleClick} />
          ) : (
            <ZzimBtn src={isZzim ? zzim : nozzim} onClick={zzimBtnhandleClick} />
          )}
        </ZzimBtnContainer>
      ) : (
        <StButton buttonColor={buttonColor} onClick={zzimBtnhandleClick} fontcolor={fontColor}>
          {isZzim ? "찜삭제" : "찜하기"}
        </StButton>
      )}
    </div>
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

const StButton = styled(StBasicButton)<{ fontcolor: any }>`
  border: 1px solid #222020;
  color: #222020;
  color: ${(props) => props.fontcolor};
`;

export default CardZzimBtn;
