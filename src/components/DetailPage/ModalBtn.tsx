import React, { useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components';
import Siren from "../../assets/icon/siren.png";
import Group from "../../assets/icon/group.png";
import { useMutation } from 'react-query';
import { deleteGoodsApi } from '../../api/goods';

const ModalBtn = ({ data, navigate } : any) => {

  const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event : any) => {
            if (divRef.current && !divRef.current.contains(event.target)) {
              setConditional({ ...conditional, modal: false });
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const deleteMutate = useMutation(() => deleteGoodsApi(data.data.info.goodsResponseDtoList.goodsId), {
        onSuccess: (res) => {
          console.log("삭제성공!", res);
          alert("게시글이 삭제되었습니다.");
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
        {data.data.info.goodsResponseDtoList.checkSameUser ? (
            <TextWrapper style={{ cursor: "pointer" }} onClick={onClickMenuOpenHandler} ref={divRef}>
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
              >
                  예약중
              </ModalButton>
              <ModalButton>거래완료</ModalButton>
              <ModalButton>게시글 수정</ModalButton>
              {(data.data.info.goodsResponseDtoList.ratingCheck)
                ? <ModalBtnDisabled>레이팅 요청</ModalBtnDisabled>
                : <ModalButton>레이팅 요청</ModalButton>}
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
  )
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

export default ModalBtn;