import React from "react";
import { styled } from "styled-components";
import {
  CancelButtonContainer,
  CancelImg,
  ModalBackground,
} from "../MyAuctionCheckPage/AuctionCompleteModal";
import remove from "../../assets/icon/remove.png";

interface DetailGoodsModalProps {
  detailModalOpen: boolean;
  setDetailModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const DetailGoodsModal: React.FC<DetailGoodsModalProps> = ({
  detailModalOpen,
  setDetailModalOpen,
}) => {
  return (
    <div>
      <ModalBackground />
      <DetailModalContainer>
        <CancelButtonContainer>
          <CancelImg
            src={remove}
            onClick={() => {
              setDetailModalOpen(false);
            }}
          />
        </CancelButtonContainer>
      </DetailModalContainer>
    </div>
  );
};

const DetailModalContainer = styled.div`
  width: 1216px;
  height: 832px;
  background-color: rgb(255, 255, 255);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  border: 2px solid black;
  border-radius: 10px;
`;
export default DetailGoodsModal;
