![image](https://github.com/ffinal4/front-end/assets/107457719/60e884e6-d7d9-44c9-8277-a2cab9b46832)

# [PEEPPO](https://peeppo.site/)

### 프로젝트 소개
'핍포'는 몰래보다(Peeping)과 주머니(Pocket)의 합성어로, 
<br/>
What's in my bag'과 같이 다른 사람의 가방을 엿보는 콘텐츠에서 영감을 받아, 서로의 주머니 속 물건을 엿보고 교환할 수 있는 중개 플랫폼을 만들자는 취지로 시작되었습니다.
<br><br/>
유저들의 물건이 화폐가 되어 유저들간의 물물교환이 가능하고 더 나아가 "레이팅게임"을 통해 각 물건마다 정해진 입찰하한가를 통해 경매를 진행할수 있어요 !

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
      <td align="center"><a href="https://www.figma.com/file/aL874LElbs7lkXTpuuhARZ/PEEPPO?type=design&node-id=716-29&mode=design&t=rULoSuZSLt8VHmZ9-0"><img src="https://peeppo.site/static/media/mascot1.46c313e9e42df5129ff0f32c94ccc94d.svg" width="35px;" alt=""/><br /><sub><b>디자이너 : 윤지숙 </b></sub></a><br /></td>
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


#### 나의 교환 상태 확인 / 실시간 채팅을 통한 교환

![image](https://github.com/ffinal4/front-end/assets/107457719/095d637f-b00a-43d9-86cd-50f1d673e17e)

<br/>
<br/>

## 🏗 Architecture

![image](https://github.com/ffinal4/front-end/assets/107457719/54dcd52b-e8b0-4982-853d-7e113540b137)

## 🏗 기술적 의사결정

<br/>
<table>
  <tbody>
    <tr>
      <th align="center">TypeScript</th>
      <td align="center" width="800px;">프로젝트의 규모가 크고 협업에서의 원활한 의사소통의 목적으로 정적 타입 검사를 통해 런타임 오류를 사전에 방지하고 코드의 가독성과 유지보수성을 향상시키기 위해 채택.</td>
    </tr>
    <tr>
      <th align="center">React Query</th>
      <td align="center" width="800px;">서버 데이터 관리를 간편하게 하고, 데이터 캐싱, 재시도 및 상태 관리를 효율적으로 처리가능하고 데이터의 일관성과 성능을 유지, 데이터 요청과 상태를 실시간으로 모니터링하고 디버깅하면서 개발 생산성을 높이고 문제를 신속하게 해결할 수 있는 React Query를 도입.</td>
    </tr>
    <tr>
      <th align="center">Recoil</th>
      <td align="center" width="800px;">단순 부모, 자식 컴포넌트사이가 아닌 여러 컴포넌트 간 데이터 공유와 관리를 유연하고 간편하게 처리할 수 있는 라이브러리. 선택적인 렌더링을 통해 컴포넌트 간 리렌더링 최적화를 통해 애플리케이션 성능을 향상시키고 불필요한 리렌더링을 방지하기 위해 도입.</td>
    </tr>
    <tr>
      <th align="center">Styled-Components</th>
      <td align="center" width="800px;">CSS-in-JS 접근 방식을 사용해 스타일을 관리하기로 결정. 컴포넌트 기반 스타일링을 통해 코드의 모듈성과 재사용성을 높이고 컴포넌트와 관련된 스타일을 한 곳에서 직관적으로 관리할 수 있어 유지보수가 용이해 선택.</td>
    </tr>
    <tr>
      <th align="center">Axios</th>
      <td align="center" width="800px;">다양한 HTTP 요청 메서드(GET, POST, PUT, DELETE 등)를 지원하고 요청과 응답을 인터셉터(Interceptor)를 통해 처리해 요청과 응답을 중앙에서 관리하고 로깅할 수 있으며 네트워크 요청의 효율성과 신뢰성을 높이고 클라이언트와 서버 간의 통신을 관리하기 위한 일관된 패턴을 구축할 수 있는 라이브러리.</td>
    </tr>
    <tr>
      <th align="center">WebSocket(STOMP)</th>
      <td align="center" width="800px;">HTTP 요청과 달리 연결을 유지하며 데이터를 주고받을 수 있어, 긴 Polling이나 다른 비효율적인 방법 대신 빠르고 효율적인 실시간 통신을 구현할 수 있기에 실시간 채팅기능 구현을 위해 웹소켓을 사용.</td>
    </tr>
    <tr>
      <th align="center">Useform</th>
      <td align="center" width="800px;">입력 필드를 처리하는 상태(state)를 간소화하고, 동시에 컴포넌트가 관리해야 하는 상태의 수도 감소하여 컴포넌트의 렌더링 횟수를 최소화하기 위해 useForm을 활용</td>
    </tr>
  </tbody>
</table>

<br/>
<br/>

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

<details>
  <summary>
    Issue1 상태관리법 결정
  </summary>

  ## 상태관리법 결정
  
  #### 이슈
  
  실시간 알림을 위해 SSE통신 연결을 시도하던 중 연결시도가 무한정으로 일어나는 이슈가 발생.
  
  #### 원인
  
  SSE통신 연결을 위해 컴포넌트 내에서 useEffect훅을 이용하여 연결을 시도하고 그 response값의 데이터를 useState를 사용해 저장하는 방식으로 구현하였음.
  하지만 처음 의도와는 다르게 state에 response값이 저장이 되면서 state값이 변화가 일어나 useEffect훅에 의해 컴포넌트가 무한정으로 리렌더링이 되어버림.
  
  #### 도입이유 
  
  SSE 연결이 성공됨에 따라 서버로부터 받아오는 상태값을 useEffect이벤트 밖으로 꺼내와 사용해야하는데 같은 컴포넌트내에 state를 이용하면 무한 렌더링에 빠질 수 있기에 전역으로 사용하기로 결정.
  
  #### 해결방안
  
  1. useEffect를 이용해 로그인 시 SSE통신 연결을 시도함.
  2. 연결이 완료될 시 서버에 알림내용을 받아오기 위해 http통신으로 get요청 시도.
  3. http통신 성공 시 받는 response값을 컴포넌트 내에서 useState로 상태값에 저장하는 것이 아닌 Recoil를 통해 값을 저장 후 useRecoilValue로 가져와 사용.
  4. SSE연결 기간 만료 시 setTimeout을 이용해 2000밀리초 후 통신연결 재요청을 시도하게끔 구현
  5. 4번 과정을 총 5번만 반복함.
  
  결과 ↓
  <br/>
  ![image](https://user-images.githubusercontent.com/135948012/269682349-e19c77a2-49f1-4fa0-89c0-d671b450d832.png)
</details>


