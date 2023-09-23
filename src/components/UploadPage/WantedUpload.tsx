import React, { useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'
import CategorySelect from '../common/CategorySelect';
import Up from '../../assets/icon/uparrow.png'
import Down from '../../assets/icon/downarrow.png'

const WantedUpload = ({ uploadData, setUploadData } : any) => {

    const divRef = useRef<HTMLDivElement>(null);

    const  [categorySelect, setCategorySelect] = useState({
        category: "",
        name: "카테고리 선택",
    });
    const [selectBar, setSelectBar] = useState<boolean>(false);
    const [info, setInfo] = useState({
        title: "",
        content: ""
    });
    const { category, name } = categorySelect;
    const { title, content } = info;

    const onClickDropDownHandelr = () => {
        setSelectBar(!selectBar);
    };

    const onChangeTextInfoHandler = (event: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInfo({
            ...info,
            [name]: value
        });
    };

    const onBlurEventHandler = () => {
        setUploadData({...uploadData, wanted: {...uploadData.wanted, title: title, content: content}});
    };

    useEffect(() => {
        const handleClickOutside = (event: any) => {
          if (divRef.current && !divRef.current.contains(event.target)) {
            setSelectBar(false);
          }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
      }, []);

    useEffect(() => {
        if (category !== "") {
            setUploadData({...uploadData, wanted: {...uploadData.wanted, category: category}});
        };
    }, [selectBar]);

  return (
    <LastLineContainer>
        <RequiredText>받아요</RequiredText>
        <LastWrapper>
            <SelecBarWrapper>
                <SelectBar
                    style={{marginBottom: "30px"}}
                    onClick={onClickDropDownHandelr}
                    ref={divRef}>
                    <Text>{name}</Text>
                    {(selectBar)
                        ? <ChoiceBox src={Up}></ChoiceBox>
                        : <ChoiceBox src={Down}></ChoiceBox>}
                </SelectBar>
            </SelecBarWrapper>
            {(selectBar)
                && <SelectContainer>
                    <CategorySelect
                        categorySelect={categorySelect}
                        setCategorySelect={setCategorySelect}
                        setSelectBar={setSelectBar}
                    />
                </SelectContainer>
            }
            <TitleInput
                    type='text'
                    maxLength={40}
                    name='title'
                    value={title}
                    placeholder='교환 받고 싶은 물건의 이름을 입력해주세요.'
                    onChange={onChangeTextInfoHandler}
                    onBlur={onBlurEventHandler}
                    style={{borderColor: `${(title.length >= 40) ? "red" : "#000"}`}}
                >
            </TitleInput>
            <InputContainer style={{borderColor: `${(content.length >= 250) ? "red" : "#000"}`}}>
                <DesciptionTextarea
                    typeof='text'
                    maxLength={250}
                    name='content'
                    value={content}
                    placeholder='구입 연도, 브랜드, 사용감, 하자 유무 등 교환을 원하는 사람들에게 필요한 정보를 꼭 포함해주세요! (최소 10자 이상)'
                    onChange={onChangeTextInfoHandler}
                    onBlur={onBlurEventHandler}
                />
            </InputContainer>
            <TextCount
                style={{marginBottom: "30px", color: `${(content.length >= 250) ? "red" : "#000"}`}}
                color={(content.length >= 250) ? "red" : "#000"}
            >{content.length}/250
            </TextCount>
            <TagInput
                placeholder='태그를 입력해주세요.'
            />
        </LastWrapper>
    </LastLineContainer>
  )
};

const LastLineContainer = styled.div`
    display: flex;
    padding: 30px 0px 60px 0px;
    border-bottom: 4px solid;

    @media screen and (max-width: 500px) {
        display: grid;
        gap: 14px;
    }
`;

const RequiredText = styled.div`
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
    min-width: 191px;
    color: #222020;
`;

const SelecBarWrapper = styled.div`
    width: 100%;
`;

const SelectBar = styled.div`
    display: inline-flex;
    height: 44px;
    padding: 0px 20px;
    border-bottom: 1px solid;
    justify-content: center;
    align-items: center;
    gap: 122px;
    margin-bottom: 30px;
    cursor: pointer;

    @media screen and (max-width: 843px) {
        gap: 20px;
    }
`;

const LastWrapper = styled.div`
    width: 100%;
    display: grid;
`;

const Text = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
`;

const ChoiceBox = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
`;

const InputContainer = styled.div`
    width: 100%;
    height: 199px;
    border: 1px solid #ADADAD;
    border-radius: 5px;
    padding: 20px;
`;

const DesciptionTextarea = styled.textarea`
    width: 100%;
    height: 100%;
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    border: none;
    outline: none;
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
`;

const TextCount = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    margin: 10px 0px 0px 0px;
    margin-bottom: 30px;
`;

const TagInput = styled.input`
    display: inline-flex;
    width: 100%;
    height: 44px;
    padding: 0px 0px 0px 20px;
    margin: 0px 0px 15px 0px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 1px solid #ADADAD;
    border-radius: 5px;
    background-color: #FCFCFC;
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
`;

const TitleInput = styled.input`
    display: inline-flex;
    width: 656px;
    height: 44px;
    padding: 0px 20px 0px 20px;
    margin: 0px 16px 30px 0px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 1px solid #ADADAD;
    border-radius: 5px;
    background-color: #FCFCFC;
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;

    @media screen and (max-width: 500px) {
        max-width: 320px;
    }
`;

const SelectContainer = styled.div`
    margin: 40px 0px 0px 0px;
    position: absolute;

    @media screen and (max-width: 500px) {
        left: 0px;
    }
`;

export default WantedUpload;