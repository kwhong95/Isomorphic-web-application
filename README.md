# Isomorphic JavaScript Web Development

> React와 Node.js를 활용한 동형 웹 앱 구현

## 1. 동형 앱이란?

> 동형(Isomorphic): 두 가지 목적을 갖는 대칭

주된 아이디어는 브라우저에서 동작하도록 설계된 자바스크립트 애플리케이션이 동시에 HTML 마크업을 만드는 서버에서도 동작하도록 작성하는 것에 있다.


### 이점
- 검색 엔진 최적화(SEO)
- 초기 페이지 로딩 속도 최적화
- 클라이언트와 서버측의 코드를 서로 공유함으로써 중복되는 코드 감소
- 이에 따라 복합 기능 팀(cross-functional team)을 만들기 쉬워짐

### 클라이언트와 서버 간에 공유되는 항목 예
- 프레젠테이션 계층(UI)
- 라우팅(Routing)과 네비게이션(Navigation)
- 데이터 조회와 저장
- UI 지역화(localization)와 내재화(internalization)

## 2. 동형 자바스크립트 코드는 어떻게 작성하는가?
> 동형(유니버셜) 자바스크립트 코드는 환경에 종속적이지 않거나 환경마다 포함된다.

브라우저의 `window`나 서버의 `process.env`, `req.cookies`처럼 종속적인 속성을 포함할 수 없음을 의미  
대신 그러한 속성에 접근할 수 있는 연결고리(shim)을 제공함으로써 모듈에서 `window.location.path`나 `req.path`같은 단일 API가 노출되게 한다.

### Moment.js 에서는 다음 코드가 Node.js와 브라우저 환경에서 동작한다.

#### 서버(Node.js)
```js
import moment from 'moment';
moment().format('MMMM Do YYYY, h:mm:ss a');
```

#### 클라이언트(브라우저)
```html
<script src="moment.js"></script>
<script>
  moment().format('MMMM Do YYYY, h:mm:ss a');
</script>
```

**브라우저리파이(Browserify)** 나 **웹팩(Webpack)** 같은 모듈 번들러(module bundler)는 특정 환경에 알맞게 자바스크립트 코드를 모듈화하고 최적화할 수 있게 해준다.
