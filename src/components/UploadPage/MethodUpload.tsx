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
    const [methodUpload, setMethodUpload] = useState<{ methods : string[] }>({
        methods: [],
    });
    const { direct, parcel } = methodButton;
    const { methods } = methodUpload;

    const onCheckDirectHandler = () => {
        setMethodButton({...methodButton, direct: !direct});
        const isValue = methods.includes("직거래");
        if (isValue) {
            setMethodUpload({...methodUpload, methods: methods.filter(item => item !== "직거래")});
        } else {
            setMethodUpload({...methodUpload, methods: [...methodUpload.methods, "직거래"]});
        };  
    };
    
    const onCheckParcelHandler = () => {
        setMethodButton({...methodButton, parcel: !parcel});
        const isValue = methods.includes("택배");
        if (isValue) {
            setMethodUpload({...methodUpload, methods: methods.filter(item => item !== "택배")});
        } else {
            setMethodUpload({...methodUpload, methods: [...methodUpload.methods, "택배"]});
        };
    };

    useEffect(() => { 
        setUploadData({...uploadData, methods});   
    }, [methodUpload]);

  return (
    <LineContainer>
        <RequiredText>교환방법</RequiredText>
        <Wrapper>
            <StBasicButton
                buttonColor={(direct) ? "#575757" : "white"}
                style={{color: `${(direct) ? "white" : "#000"}`}}
                onClick={onCheckDirectHandler}
            >직거래
            </StBasicButton>
            <StBasicButton
                buttonColor={(parcel) ? "#575757" : "white"}
                style={{color: `${(parcel) ? "white" : "#000"}`}}
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