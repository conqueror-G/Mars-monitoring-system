## 시현 영상

👉 [보러가기](https://www.youtube.com/watch?v=pn_MEgDiRi4)
<br />

## ☀️ PROJECT MARS란?

- 다양한 디바이스에서 수집되는 정보를 하나의 데이터 Pipeline에서 수집합니다
- 이상 징후 탐지, 고장 및 예방 정비 예측 등이 가능한 플랫폼 개발

## ☀️ PROJECT MARS 핵심 기능

- 다양한 디바이스의 정보 수집
- 수집 정보의 가공 및 메타 데이터 추가
- 수집 데이터 분석
- 분석 결과를 통한 예측 및 장애 방지
  <br />

## ☀️ 개발 내용

- Equiment 모니터링
  - 중장비, 운송 장비 등 Equipment 상태 모니터링
- Device 모니터링
  - Equipment 데이터 수신용 Device 상태 모니터링
- Equipment, Device 관리
  - Equipment, Device 매칭
  - 각종 장비 수리이력 관리

## ☀️ 개발 인원 및 기간

- 개발기간: 2022/07/18 ~ 2022/08/11

- 개발 인원

  - F/E(2명) : 전지현, 김민석
  - B/E(2명) : 정지민, 김지영

- 담당 파트

  - 전지현
    - Monitoring(Home) : Equipment, Device를 모니터링을 할 수 있습니다
      <br />
      ✏︎ Equipment의 현재 위치 모니터링
      <br />
      ✏︎ Device의 이상징후, 고장 및 정비에 대한 통계
      <br />
      ✏︎ 해당 지역에 대한 날씨 확인
      <br />
    - Management(Detail) : Equipment Controller가 Equipment, Device를 관리할 수 있습니다
      <br />
      ✏︎ Equipment, Device에 대한 전반적인 관리
      <br />
      ✏︎ 수리, 교체, 설치 이력 관리
      <br />
  - 김민석
    - Sign-in
    - Navigation(Nav) : Equipment Controller가 담당 Device의 이상징후에 대한 알람을 받을 수 있도록 관리합니다.
    - Search(List) : Equipment, Device에 대한 메타 데이터를 조회할 수 있습니다.
    - Mapping : Equipment와 Device를 Matching 하는 페이지 입니다.
      <br />
      ✏︎ Equipment와 Device를 Matching
      <br />
      ✏︎ Equipment, Device의 초기 정보 등록
      <br />
    - History(List) : Equipment, Device의 모든 이력을 조회할 수 있습니다.

- [백엔드 github 링크](https://github.com/jiminnote/Mars_project)

<br />

## ☀️ 기술스택

<img src="https://img.shields.io/badge/react-61DAFB?style=flat-square&logo=react&logoColor=white"/><img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/><img src="https://img.shields.io/badge/MobX-FF9955?style=flat-square&logo=MobX&logoColor=white"/><img src="https://img.shields.io/badge/ReactRouter-CA4245?style=flat-square&logo=ReactRouter&logoColor=white"/><img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=TailwindCSS&logoColor=white"/>

<br />

## ☀️ Communication

1. Git / Github

- 브랜치 이름 : 페이지 단위로 분할 및 feature/release/hotfix로 구분
- 라벨 활용 : 이슈 , 진행상황 등을 구분하기 위해서 라벨 사용

2. Trello

Sprint 목표와 전반적인 업무 진행을 파악하기 위한 Tool로 Trello를 사용했습니다.

<img src="https://user-images.githubusercontent.com/90183279/185532611-55df683d-4df3-4e8c-a0f0-c6028a1aae9d.png"/>

- Backlog : 프로젝트 미팅을 하며 전체 업무를 기능별로 세분화하여 전체 티켓을 발행했습니다.
- This Sprint : 일주일을 기준으로 진행해야 할 업무 티켓을 가리킵니다.
- In progress : 현재 개발 중인 업무 티켓을 가리킵니다.
- Discussion : 추가 기능 구현을 제외한 필수 기능을 구현한 티켓을 가리킵니다.
- Done : merge가 완료되고 정상적으로 작동하는 기능을 가리킵니다.

<br />

3. Notion

- 구현기록 : F/E, B/E 간의 request, response 전달, API End Point, 데이터 건의 및 공유를 위해 사용했습니다.
  <img src="https://user-images.githubusercontent.com/90183279/185533039-d237f902-167a-4bf0-9498-c05bd7bbd8b5.png"/>
- 회의록 : 매일 진행되는 회의를 기록했습니다.
- 게시판
  - F/E 구성원 간의 컨벤션을 관리했습니다.
  - Response Data를 검증하였습니다.
  - 재사용 컴포넌트를 공유하거나 Update를 관리했습니다.
    <img src="https://user-images.githubusercontent.com/90183279/185535833-ecaf6250-4e29-4a0a-a8bc-ba19b970c60f.png"/>

<br />

4. Slack

간단한 요청사항이나 일정조율, API Server 주소 공유를 위해 사용하였습니다.
<br />

## ☀️ 구현 기능

💁🏻 Sign-in

- JWT Token을 이용한 Sign-in 방식입니다.
- 지정 서식 아이디인지 유효성 검사를 합니다.
- 패스워드가 9자 이상인지 유효성 검사를 합니다.
- 지정 서식 아이디이고, 비밀번호가 9자 이상이어야 Sign-in 버튼이 활성화 됩니다.
- 패스워드의 시각적 암호화를 풀 수 있도록 Eye 기능을 제공합니다.
  - 이 아이콘을 클릭하면 내가 어떤 문자를 입력했는지 확인할 수 있습니다.
- 다양한 HTTP 요청 실패에 대한 처리를 했습니다.
  - 서버와 연결이 끊기거나 유저가 제출한 서식이 틀렸을 시 Toast 메시지가 실행됩니다.

💁🏻 Navigation

- Top Navigation
  - 유저가 접속한 페이지의 경로를 알 수 있도록 구성했습니다.
  - 유저가 현재 접속한 페이지의 경로를 표시했습니다.
  - Equipment Controller라면 알람 메세지에 대해 API 요청을 합니다.
  - Equipment Controller가 알람 아이콘을 클릭하면 담당 Device의 이상징후 메세지를 확인 하고 삭제할 수 있습니다.
  - 로그아웃 버튼 클릭 시 JWT Token 파괴 및 Sign-in으로 리다이렉트 합니다
- Side Navigation
  - 현재 유저가 접속해 있는 페이지를 시각적으로 표시 했습니다. => NavLink의 Active기능
  - Side Navigation의 메뉴를 확대하거나 축소 할 수 있는 토글 기능이 제공됩니다.
  - Equipment Controller는 Admin Tab을 사용하거나 볼 수 있지만 Location Controller이면 Admin Tab을 볼 수 없도록 설정했습니다.

💁🏻 Search(List)

- 공통
  - 필터를 통해 원하는 정보를 검색할 수 있습니다.
  - Reset을 클릭하면 검색조건이 초기화 됩니다.
  - Equipment Controller이면 Delete 기능을 이용할 수 있습니다. 이 기능은 등록된 Equipment, Deivce를 삭제할 수 있습니다.
  - Location Controller이면 Delete 버튼이 보이지 않도록 설정했습니다.
  - 각 Equipment나 Device를 클릭하면 해당 상세 페이지로 리다이렉트 합니다.
  - 페이지네이션 기능이 적용됩니다.
- EquipmentList
  - Matching된 Device가 아니라면 Battery Status, Matched Status, Device Status, Power를 조회할 수 없습니다.
- Device List
  - Matching된 Equipment가 아니라면 Matched Status, Matched Equipment Type, Matched Equipment를 조회할 수 없습니다.

💁🏻 Mapping

- Equipment와 Device를 등록 할 수 있습니다.
- 등록된 Equipment와 Device를 Matching 할 수 있습니다.

💁🏻 History(List)

- 지금까지 이행된 수리, 교체, 설치에 대한 이력을 모두 조회할 수 있습니다.

## 이슈 공유

1. 렌더링 관련 이슈

- 이슈 내용
  - Delete를 하거나 Matching했을 때 렌더링이 안되는 현상입니다.
- 원인
  - React는 상태가 변하면 렌더링이 일어납니다. 따라서 Delete를 하면 렌더링이 될 것이라고 생각했지만, 생각의 오류였습니다. 클라이언트의 데이터를 수정한 것이 아니라 서버의 데이터를 수정한 것이기 때문에 렌더링이 안 일어나는 것이 맞습니다.
- 해결
  - 먼저 서버의 데이터를 수정하도록 요청을 하고, 수정된 데이터를 다시 요청했습니다.

2. 불필요한 렌더링 이슈

- 이슈 내용
  - 불필요한 렌더링으로 사이트의 성능이 좋지 않습니다.
- 원인
  - mobx 활용 미숙으로 observer의 대상이 된 컴포넌트들이 모두 렌더링 됩니다.
- 해결
  - 아직 해결은 하지 못했으나 공식 문서를 읽고 리팩토링하며, 상태를 변경해야하는 값과 필요하지 않은 값을 분리해야할 것으로 보입니다.

3. 비슷한 디자인의 List 페이지 재사용성 이슈

- 이슈 내용
  - 무려 4개의 페이지가 디자인이 비슷했지만, 제한된 시간 리소스에 의해 재사용성이 사장됬습니다.
- 원인
  - 제한된 리소스(개발 기간)
  - 페이지마다 API의 Response가 다른데 어떻게 적용할 수 있을지 잘 모르겠습니다.
- 해결
  - 재사용 컴포넌트로 만들지 못하고, 조건문과 useLocation을 활용해 한 컴포넌트에서 3개의 페이지를 담당하도록 했습니다. 그 결과로 가독성이 정말 안좋으며, 디자인의 수정이 일어난다면 해당 부분을 찾아 모두 수정해야하는 리소스의 낭비로 이어졌습니다.
  - 현재 List 컴포넌트는 List페이지 2개와 History 페이지를 모두 담아내고 있습니다.
  - 재사용할 수 있는 여지는 없는지 찾아보아야할 것입니다.

4. 개발 환경 셋팅 - React templete Repo

- 이슈 내용
  - 회사 내의 Repository에 개발 환경 셋팅 templete이 있는지 반드시 찾아보고, 있다면 적극적으로 사용해야합니다.
- 효과
  - 개발 환경 셋팅을 하며 만날 수 있는 많은 문제를 겪지 않고 시간이라는 리소스를 절약했습니다.
- 리뷰
  - 직접 진행했다면 많은 문제를 겪었을 수 있었는데, 적극적으로 활용한 덕분에 적어도 1일 이상 절약할 수 있었다고 생각합니다.
