import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { deleteGoodsApi } from "../../api/goods";
import { useMutation } from "react-query";
import { styled } from "styled-components";
import Siren from "../../assets/icon/siren.png";
import Group from "../../assets/icon/group.png";
import { deleteAuctionCancelApi } from "../../api/acution";

const AucModalBtn = ({ data, navigate }: any) => {
  const divRef = useRef<HTMLDivElement>(null);
  const auctionId = data?.data.info.auctionResponseDto.auctionId;

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setConditional({ ...conditional, modal: false });
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const deleteMutate = useMutation(
    () => deleteGoodsApi(data.data.info.goodsResponseDtoList.goodsId),
    {
      onSuccess: (res) => {
        console.log("삭제성공!", res);
        Swal.fire({
          icon: "success",
          text: "게시글이 삭제되었습니다.",
          confirmButtonColor: "#58abf7",
        });
        navigate("/");
      },
    }
  );
  const cancelMutate = useMutation(() => deleteAuctionCancelApi(auctionId), {
    onSuccess: (res) => {
      console.log("경매취소성공!", res);
      Swal.fire({
        icon: "success",
        text: "경매가 취소되었습니다.",
        confirmButtonColor: "#58abf7",
      });

      navigate("/");
    },
  });

  const [conditional, setConditional] = useState({
    modal: false,
    auction: false,
  });
  const { modal, auction } = conditional;

  const onClickMenuOpenHandler = () => {
    setConditional({ ...conditional, modal: !modal });
  };

  return (
    <TextWrapper>
      {data?.data.info.auctionResponseDto.checkSameUser ? (
        <TextWrapper
          style={{ cursor: "pointer" }}
          onClick={onClickMenuOpenHandler}
          ref={divRef}
        >
          <SmallBox src={Group} />
        </TextWrapper>
      ) : (
        <TextWrapper style={{ cursor: "pointer" }}>
          <SmallBox src={Siren} />
          <ColorText color="#ADADAD">신고하기</ColorText>
        </TextWrapper>
      )}
      {modal && (
        <ModalBtnWrapper>
          <ModalButton
            style={{
              borderTop: "1px solid #D5D4D4",
              borderRadius: "5px 5px 0px 0px",
            }}
            onClick={() => cancelMutate.mutate()}
          >
            경매종료
          </ModalButton>
          <ModalButton>게시글 수정</ModalButton>
          <ModalButton
            style={{ borderRadius: "0px 0px 5px 5px" }}
            onClick={() => {
              deleteMutate.mutate();
            }}
          >
            삭제
          </ModalButton>
        </ModalBtnWrapper>
      )}
    </TextWrapper>
  );
};

const ModalBtnWrapper = styled.div`
  width: 176px;
  position: absolute;
  top: 50px;
  right: 0;
`;

const ModalButton = styled.div`
  display: flex;
  width: 176px;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  background-color: #fcfcfc;
  border-bottom: 1px solid #d5d4d4;
  border-left: 1px solid #d5d4d4;
  border-right: 1px solid #d5d4d4;
  cursor: pointer;

  &:hover {
    background-color: #e9e9e9;
  }
`;

const ModalBtnDisabled = styled.div`
  display: flex;
  width: 176px;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: #d5d4d4;
  background-color: #fcfcfc;
  border-bottom: 1px solid #d5d4d4;
  border-left: 1px solid #d5d4d4;
  border-right: 1px solid #d5d4d4;
  cursor: default;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
`;

const SmallBox = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const ColorText = styled.div<{ color: string }>`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: ${(props) => props.color};
`;

export default AucModalBtn;
