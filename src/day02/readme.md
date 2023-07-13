# react 의 주요개념

jsx : 새로운언어 (javascript + xml:html)

# 기존의 javascript,html 과의 차이점
1. class 속성 | className
      태그    | 컴포넌트(만든 태그 : 함수)

2. 작업하면 자동으로 갱신
*다양한 변수 사용법

2-1. state : 컴포넌트 내에서 사용하는 변수, 화면을 갱신하고 싶을떄 사용하는 변수
2-2. props : 속성, 변수로 전달(값)
2-3. context : props 전역으로 설정해서 사용 

3. hook : 함수 
    usestate
    usecontext
    useRef
    useEffect

4. 사용자정의 hook

# 컴포넌트
.js .mjs .jsx 를 사ㅏ용할때 생략가능
import할 떄는 확장자 생략가능
첫글자는 반드시 대문자사용 html 은 전부소문자
대부분의 컴포넌트는 단일태그로 사용
그룹역활을 하는 컴포넌트는 쌍으로 이루어 사용

# extention
ES7

//rfc : 함수형 컴포넌트 export 내장
//rfce : 함수형 컴포넌트 export 별도선언
//rfafc : 화살표 함수 컴포넌트 export 내장
//rafcee : 화살표 함수 컴포넌트 export 별도 선언
//rcc : 클래스형 컴포넌트

# 크롬브라우저에 설치하는 개발도구
react development tools
각종 컴포넌트, state, props, context  확인할수 있는도구

# react event handelr
1. <button onMouseOver ={파라미터가 없는 함수명}>마우스오버</button>
2. <button onMouseOver ={()=>{함수{(파라미터)}}>마우스오버</button>
3. <button onMouseOver ={()=>{함수(파라미터)}>마우스오버</button>
