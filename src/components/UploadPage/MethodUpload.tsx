import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { StBasicButton } from '../../styles/BasicButton';

interface Props {
    uploadData: object;
    setUploadData: React.Dispatch<React.SetStateAction<object>>;
};

const MethodUpload : React.FC<Props> = ({ uploadData, setUploadData }) => {

    const [methodButton, setMethodButton] = useState({
        direct: false,
        parcel: false,
    });
    const [methodUpload, setMethodUpload] = useState<{ method : string[] }>({
        method: [""],
    });
    const { direct, parcel } = methodButton;
    const { method } = methodUpload;

    const onCheckDirectHandler = () => {
        setMethodButton({...methodButton, direct: !direct});
    };
    
    const onCheckParcelHandler = () => {
        setMethodButton({...methodButton, parcel: !parcel});
    };

    useEffect(() => {
        if (direct) {
            setMethodUpload({...methodUpload, method: ["직거래"]});
        };
        if (parcel) {
            setMethodUpload({...methodUpload, method: ["택배"]});
        };
        if (direct && parcel) {
            setMethodUpload({...methodUpload, method: ["직거래", "택배"]});
        };
        if (direct === false && parcel === false) {
            setMethodUpload({...methodUpload, method: [""]});
        }
        setUploadData({...uploadData, method});
    }, [methodButton]);

  return (
    <LineContainer>
        <RequiredText>교환방법</RequiredText>
        <Wrapper>
            <StBasicButton
                buttonColor={(direct) ? "#d6d6d6" : "white"}
                onClick={onCheckDirectHandler}
            >직거래
            </StBasicButton>
            <StBasicButton
                buttonColor={(parcel) ? "#d6d6d6" : "white"}
                onClick={onCheckParcelHandler}
            >택배
            </StBasicButton>
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
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    @media screen and (max-width: 843px) {
        display: grid;
    }
`;

export default MethodUpload;