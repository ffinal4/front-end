import React from 'react'
import * as S from '../style/style'

const DetailContainer = () => {
  return (
    <S.LayoutContainer>
      <S.ImageBox>사진등록</S.ImageBox>
      <S.InfoContainer>
        <S.InfoTitle>스타벅스 교환권 30,000원</S.InfoTitle>
        <S.UserNameContainer>
          <S.Text style={{color: "#717171"}}>핍포님의 주머니</S.Text>
          <S.BoxWrapper>
            <S.Text style={{color: "#717171"}}>핍포님의 주머니</S.Text><S.SmallBox />
          </S.BoxWrapper>
        </S.UserNameContainer>
        <S.UserNameContainer style={{border: "none", paddingTop: "30px"}}>
          <S.LeftWrapper>
            <S.Wrapper>
              <S.BigBox></S.BigBox>
              <S.Text style={{color: "#717171"}}>00</S.Text>
            </S.Wrapper>
            <S.Wrapper>
              <S.BigBox></S.BigBox>
              <S.Text style={{color: "#717171"}}>00일 전</S.Text>
            </S.Wrapper>
          </S.LeftWrapper>
          <S.LeftWrapper>
            <S.Wrapper>
              <S.BigBox></S.BigBox>
              <S.Text style={{color: "#717171"}}>신고하기</S.Text>
            </S.Wrapper>
          </S.LeftWrapper>
        </S.UserNameContainer>
        <S.TextContainer>
          <S.TextLine>
            <S.Text style={{color: "#717171", paddingRight: "40px"}}>카테고리</S.Text>
            <S.Text>기프티콘</S.Text>
          </S.TextLine>
          <S.TextLine>
            <S.Text style={{color: "#717171", paddingRight: "40px"}}>상품상태</S.Text>
            <S.Text>최상</S.Text>
          </S.TextLine>
          <S.TextLine>
            <S.Text style={{color: "#717171", paddingRight: "40px"}}>거래지역</S.Text>
            <S.Text>대구광역시 북구 매전로4길 9 매천센트럴파크 205동 401호</S.Text>
          </S.TextLine>
          <S.TextLine>
            <S.Text style={{color: "#717171", paddingRight: "40px"}}>카테고리</S.Text>
            <S.Text>기프티콘</S.Text>
          </S.TextLine>
        </S.TextContainer>
        <S.Text style={{color: "#717171"}}>*상대방이 교환신청을 수락하여 채팅이 가능해요!</S.Text>
        <div>
          {/* <S.Button></S.Button> */}
        </div>
      </S.InfoContainer>
    </S.LayoutContainer>
  )
}

export default DetailContainer