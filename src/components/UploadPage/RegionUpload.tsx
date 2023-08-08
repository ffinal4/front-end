import React, { useState } from 'react'
import { styled } from 'styled-components'
import { StBasicButton } from '../../styles/BasicButton';

interface Props {
  uploadData: object;
  setUploadData: React.Dispatch<React.SetStateAction<object>>;
};

const RegionUpload : React.FC<Props>= ({ uploadData, setUploadData }) => {

  const [region, setRegion] = useState({
    location: "경기도 00시 00구 00동",
  });
  const { location } = region;

  // setUploadData({...uploadData, location});

  return (
    <LineContainer>
        <RequiredText>주거래지역</RequiredText>
          <Wrapper style={{gap: "39px"}}>
            <Text>{location}</Text>
            {/* <StBasicButton buttonColor="#D9D9D9">직접입력</StBasicButton> */}
          </Wrapper>
    </LineContainer>
  )
};

const LineContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 30px 0px 30px 0px;
    border-bottom: 2px dotted #EAEAEA;
`;

const RequiredText = styled.div`
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
    min-width: 191px;
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 39px;

    @media screen and (max-width: 843px) {
        display: grid;
    }
`;

const Text = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
`;

export default RegionUpload;