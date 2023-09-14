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
      <td align="center"><a href="https://github.com/LOCA525"><img src="https://avatars.githubusercontent.com/u/98865366?v=4" width="50px;" alt=""/><br /><sub><b>FE 팀장 : 박준영</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/myeongjin99"><img src="https://avatars.githubusercontent.com/u/107457719?v=4" width="50px;" alt=""/><br /><sub><b>FE 팀원 : 서명진</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/seungjaelee2684"><img src="https://avatars.githubusercontent.com/u/135948012?v=4" width="50px;" alt=""/><br /><sub><b>FE 팀원 : 이승재</b></sub></a><br /></td>
      <td align="center"><a href="https://www.figma.com/file/aL874LElbs7lkXTpuuhARZ/PEEPPO?type=design&node-id=716-29&mode=design&t=rULoSuZSLt8VHmZ9-0"><img src="https://files.slack.com/files-tmb/T03GJEFQ63V-F05SABEEBJN-c4b304b194/layer_3_720.png" width="50px;" alt=""/><br /><sub><b>디자이너 : 윤지숙 </b></sub></a><br /></td>
     <tr/>
      <td align="center"><a href="https://github.com/jiooong"><img src="https://avatars.githubusercontent.com/u/102176567?v=4" width="50px;" alt=""/><br /><sub><b>BE 팀장 : 이지원 </b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/K-IMjihun"><img src="https://avatars.githubusercontent.com/u/62210749?v=4" width="50px;" alt=""/><br /><sub><b>BE 팀원 : 김지훈</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/stoow1"><img src="https://avatars.githubusercontent.com/u/134283428?v=4" width="50px;" alt=""/><br /><sub><b>BE 팀원 : 이지원</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>

<br/>

## 프로젝트 기능 소개

#### 물물교환 경매 시스템 / 입찰

![image](https://github.com/ffinal4/front-end/assets/107457719/3f3e8c0a-aa51-4eca-8371-72cfd03546bb)


#### 게임을 통한 물건 레이팅

![image](https://github.com/ffinal4/front-end/assets/107457719/90e8245a-d1e9-4d0a-996c-848952b04db6)


#### 나의 교환 상태 확인 / 채팅을 통한 교환

![image](https://github.com/ffinal4/front-end/assets/107457719/095d637f-b00a-43d9-86cd-50f1d673e17e)

<br/>
<br/>
## 🏗 Architecture

![image](https://github.com/ffinal4/front-end/assets/107457719/54dcd52b-e8b0-4982-853d-7e113540b137)

<br/>
<br/>

- 프로젝트 관리 : 애자일 방법론을 따라 Jira를 활용하여 이슈를 생성하고 관리했습니다.

- 버전 관리와 협업: GitHub를 통해 코드를 버전 관리하고, 브랜치와 커밋을 통해 코드 협업을 체계적으로 진행했습니다. 또한 커밋 컨벤션을 준수하여 코드의 가독성을 높였습니다.

- 프로그래밍 언어와 스타일링: TypeScript를 기반으로 개발을 진행하고, 컴포넌트 단위로 분리하여 스타일드 컴포넌트를 사용하여 CSS를 작성했습니다.

- 효율적인 통신 : 백엔드와의 효율적인 통신을 위해 React Query를 선택

- 상태 관리 : Recoil을 활용하여 전역 상태를 관리하여 복잡한 상태 로직을 캡슐화하고 컴포넌트 간 데이터 교환을 단순화했습니다.

- 입력 필드 관리: useForm을 활용하여 입력 필드를 처리하는 상태를 간소화하고, 컴포넌트의 렌더링 횟수를 최소화했습니다.

- 실시간 채팅 기능: 웹소켓(STOMP) 기술을 활용하여 실시간 채팅 기능을 구현했습니다.

- CI/CD 환경 구축: 배포의 편의성을 높이기 위해 netlify를 사용하여 CI/CD 환경을 구축하였습니다.


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

메인페이지, 물물교환리스트, 경매리스트 이미지 로딩 시간이 길어지는 문제가 발생

#### 원인

이미지가 캐시 되지 않거나, 브라우저 캐시가 비어있어 이미지를 다시 다운로드해야 했기 때문

#### 해결방안

1. 캐시스토리지에 CashName 생성
2. try 블록 내부에서 캐시 스토리지를 열고, 주어진 url과 일치하는 캐시를 확인
3. 이미지 데이터를 캐시에서 찾았으면, 해당 데이터를 출력
4. 이미지 데이터를 캐시에서 찾지 못한 경우, Axios를 사용하여 데이터 가져오기
5. Axios로부터 받은 데이터를 Blob 형식으로 변환

결과 : 이미지 캐싱 처리를 도입한 결과, LightHouse평가에서 성능이 75에서 87로 향상되어 페이지 로딩속도가 개선


<br/>

### Issue2 

####  원인



#### 해결 순서


<br>
<br>


