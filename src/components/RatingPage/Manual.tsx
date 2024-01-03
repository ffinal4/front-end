import React, { useState } from 'react'
import { styled } from 'styled-components';
import Question from '../../assets/icon/question.png'
import ManualModal from '../../assets/images/manual.png'

const Manual = () => {

    const [ModalBoolean, setModalBoolean] = useState(false);

  return (
    <PointInfo
        onMouseOver={() => setModalBoolean(true)}
        onMouseLeave={() => setModalBoolean(false)}
    >
        <QuestionImg src={Question} />
        <BottomText>포인트는 어디에 쓰나요?</BottomText>
        {(ModalBoolean) && <Modal src={ManualModal} />}
    </PointInfo>
  )
};

const PointInfo = styled.div`
    width: 190px;
    padding: 20px 0px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 7px;
    position: relative;
    cursor: pointer;
`;

const BottomText = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: #39373A;
`;

const QuestionImg = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
`;

const Modal = styled.img`
    width: 286px;
    height: 222px;
    object-fit: contain;
    position: absolute;
    top: -200px;
    left: -85px;
    z-index: 999;

    @media screen and (max-width: 500px) {
        top: -210px;
        left: -5px;
    }
`;

export default Manual;