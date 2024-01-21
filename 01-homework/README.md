# 멋쟁이 사자 1주차 리액트 과제
JSX 또는 React API를 사용해, Vanilla 프로젝트에서 구현한 
인터페이스의 일부를 마크업하여 웹 브라우저에 렌더링되도록 만듭니다.

## 💜 프로젝트 소개 (메인 페이지)
![image](https://github.com/dlehdg/react-homework/assets/80308340/c2658fa0-93fe-45ce-a3f9-693bedd27ef6)

해당하는 메인 페이지를 4개의 컴포넌트로 구성할 것이고 또한 subswiper 부분은 재사용 할 생각이다


## 디렉토리 구조


![image](https://github.com/dlehdg/react-homework/assets/80308340/d98efe77-b20d-4564-bf44-365535677198)


## 개발 과정

위에서 말한대로 해당 프로젝트는 3개의 컴포넌트를 통해 마크업을 구성하였다

![image](https://github.com/dlehdg/react-homework/assets/80308340/386ac4d8-be2a-4717-9a86-f945879913f8)


<br>

Banner 컴포넌트를 제외한 나머지 컴포넌트들은 swiper를 통해 개발을 하였는데
기존에 바닐라js를 통해 구현하였던 swiper를 리액트에서는 swiper/react에서 제공해주는 코드로 변경 하였다
swiper/react 에서는 Swiper 태그와 SwiperSlide를 제공해주어서 기존에 바닐라 js에서 만든 swiper 보다 쉽게 구현할 수 있었다

![image](https://github.com/dlehdg/react-homework/assets/80308340/ca1f139a-7433-4474-9d2b-609d9e3974cb)

또한 Swiper 태그에 기존에 js 코드로 수정해서 만든 모듈들을 속성을 통해 좀 더 쉽게 기능구현이 가능한다는 사실을 알 수 있었다

![image](https://github.com/dlehdg/react-homework/assets/80308340/fa717f00-562a-47ed-937d-2ba94bf5b249)

그리고 subswiper 부분은 데이터를 props를 통해 가져와서 그 데이터를 통해 swiper 슬라이드를 렌더링하는 코드를 구현하였다



## 결과

![image](https://github.com/dlehdg/react-homework/assets/80308340/4884f9cf-c9d4-4a3b-9791-1ad422993ff9)


## 과제를 통해 느낀점

리액트로 넘어오면서 컴포넌트를 만들고 이 컴포넌트를 통해 웹 사이트를 만들었는데 바닐라 js에 비해 재사용성이 정말 좋았고
컴포넌트 끼리 충돌문제 등이 안생기고 더 쉽게 코드를 작성해준다는 사실을 알 수 있었다
