# React Components 

## 1. 프로젝트에서 UI 컴포넌트 그룹화

### 컴포넌트 구조
- 공유(Shared - 여러 화면에서 재사용됨)
- 제네릭(Generic - 특정화면이나 웹 페이지와 반드시 연관되지는 않음)이 된다.

컴포넌트 폴더 내의 중첩은 한 단계만 있음을 주목한다.
폴더 구조를 많이 중첩하면 팀 구성원이 탐색 시 어려움이 있을 수 있으므로 개발자 경혐(developer experience)가 떨어진다.

### 라우트 구조
|URL 경로|페이지 타이틀|텀포넌트|
| --- | --- | --- |
| / | Home | /routes/Home|
|/search| Search | /routes/Search |
| /s/:category | Search in {Category} | /routes/Search |
| /dashboard | User dashboard | /routes/Dashboard |


앱의 화면이나 웹 페이지를 렌더링하기 위한 컴포넌트  
별도의 `routes` 폴더에 라우팅 정보와 데이터 정보 조회 로직(fetching logic)을 포함

## 2. UI를 컴포넌트 계층구조로 분해하기

### Home WireFrame

<img width="873" alt="스크린샷 2021-08-13 오후 1 15 30" src="https://user-images.githubusercontent.com/70752848/129304114-72367c48-74a2-43ff-a605-a02d361051c8.png">

### Search WireFrame

<img width="873" alt="스크린샷 2021-08-13 오후 1 35 14" src="https://user-images.githubusercontent.com/70752848/129305382-249cea53-7150-43af-9fb9-7b3406e9a347.png">

