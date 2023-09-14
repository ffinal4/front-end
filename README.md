![image](https://github.com/ffinal4/front-end/assets/107457719/60e884e6-d7d9-44c9-8277-a2cab9b46832)

# [PEEPPO](https://peeppo.site/)

### 프로젝트 소개

핍포(PEEPPO)는 몰래보다(Peeping)와 주머니(Pocket)의 합성어로, 주머니를 몰래 살펴본다는 뜻을 가지고 있어요. 내 물건을 상대방의 물건과 물물교환할 수 있는 플랫폼입니다.

<br/>
<br/>

### 📆 프로젝트 기간

- 2023 07.28 ~ 2023.09.08

<br/>

### 😎 Members
<table>
  <tbody>
    <tr>
      <td align="center"><a href=""><img src="" width="40px;" alt=""/><br /><sub><b>FE 팀장 : 박준영</b></sub></a><br /></td>
      <td align="center"><a href=""><img src="" width="40px;" alt=""/><br /><sub><b>FE 팀원 : 서명진</b></sub></a><br /></td>
      <td align="center"><a href=""><img src="" width="40px;" alt=""/><br /><sub><b>FE 팀원 : 이승재</b></sub></a><br /></td>
      <td align="center"><a href=""><img src="" width="40px;" alt=""/><br /><sub><b>DE 팀원 : 윤지숙</b></sub></a><br /></td>
    </tr>
    <tr>
      <td align="center"><a href=""><img src="" width="80px;" alt=""/><br /><sub><b>BE 팀장 : 이지원</b></sub></a><br /></td>
      <td align="center"><a href=""><img src="" width="80px;" alt=""/><br /><sub><b>BE 팀원 : 김지훈</b></sub></a><br /></td>
      <td align="center"><a href=""><img src="" width="80px;" alt=""/><br /><sub><b>BE 팀원 : 이지원</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>

<br/>

## 프로젝트 기능 소개

#### 포켓경매

![image](https://github.com/ffinal4/front-end/assets/107457719/3f3e8c0a-aa51-4eca-8371-72cfd03546bb)


#### 🦊 경매

- 솰라솰라

<br/>
<br/>

## 🏗 Architecture

![image](https://github.com/ffinal4/front-end/assets/107457719/54dcd52b-e8b0-4982-853d-7e113540b137)

<br/>
<br/>
프론트단 에서는 애자일방법론의 협업툴 Jira를 택하여 이슈를생성하고
깃허브와 연동하여 브랜치와 커밋생성을 통해 커밋 컨벤션을 정립하였습니다.
TypeScript를 기반으로 개발을 진행하였고 스타일드 컴포넌트를 
사용하여 컴포넌트 단위로 분리해 CSS를 작성하였습니다. 백엔드와의 효율적인 통신을 위해 React Query를 선택했습니다. 더불어 실시간 채팅 기능을 구현하기 위해 웹소켓(STOMP) 기술을 활용하였습니다. 전역 상태 관리에는 Recoil을 활용하여 애플리케이션의 상태를 효과적으로 관리했습니다. 복잡한 상태 관리 로직을 캡슐화하고 컴포넌트 간 데이터 교환을 단순화할수 있었습니다.
입력 필드를 처리하는 상태(state)를 간소화하고, 동시에 컴포넌트가 관리해야 하는 상태의 수도 감소하여 컴포넌트의 렌더링 횟수를 최소화하기 위해 useForm을 활용했습니다. 마지막으로, 배포의 편의성을 높이기 위해 netlify 를 이용해 CI/CD 환경을 구축하였습니다.



## 🛠 Tools


#### Frontend

<p>
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <br>
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" >
   <img src="https://img.shields.io/badge/axios-007CE2?style=for-the-badge&logo=axios&logoColor=white" >
   <img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">
  <br>
  <img src="https://img.shields.io/badge/recoil-FF4154?style=for-the-badge&logo=recoily&logoColor=white">
  <img src="https://img.shields.io/badge/WebRTC-232F3E?style=for-the-badge&logo=WebRTC&logoColor=white">
  <br>

</p>

#### Dev tools

<p> 
  <img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white">
  <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white">
</p>

<br>
<br>

## 🔥 Trouble Shooting

### Issue1 이미지 로딩 딜레이 이슈

메인페이지, 물물교환리스트, 경매리스트 페이지 로딩 시간이 길어지는 문제가 발생

#### 원인

이미지가 캐시 되지 않거나, 브라우저 캐시가 비어있어 이미지를 다시 다운로드해야 했기 때문

#### 해결 순서

1. 캐시스토리지에 CashName 생성
2. 
3. 

<br/>

### Issue2 

####  원인



#### 해결 순서


<br>
<br>


