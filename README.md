# 네이버 로그인 페이지 구현

### [로그인 페이지.js 링크] ([과제0623](https://github.com/nada77777/js-homeworkk/blob/main/js/main.js)) 

---
```
const emailInput = document.querySelector('.user-email-input');
const passwordInput = document.querySelector('.user-password-input');
const form = document.querySelector('.login-form');

emailInput.addEventListener('input', handleInput);
passwordInput.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);
```
이벤트 발생요소를 각각 변수에 할당 및 이벤트 리스너에 `handleInput` `handleSubmit` 콜백 함수 전달

---

```
function reg(value, type) {
  console.log(value, type);
  return type === 'email' ? emailReg(value) : pwReg(value);
};

function emailReg(text) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}
```
`reg`함수 인자 value, type에 따라서 `emailReg과` `pwReg`가 호출 가능하도록 삼항연산자 이용해서 boolean값을 리턴

---
```
const userInput = {
  email: null,
  password: null,
}

function handleInput(event) {
  const { value, type } = event.target;

  const node = type === 'email' ? emailInput : passwordInput;

  if (reg(value, type) || value === '') {
    node.classList.remove('is--invalid');
  } else {
    node.classList.add('is--invalid');
  };

  userInput[type] = value;
};
```
submit이벤트 발생 시 기존 user객체와 입력받은 input의 value 비교를 위해서 userInput객체 생성하고
`emailInput`과 `passwordInput`에서 공통적으로 사용되는 부분을 `handleInput` 함수로 생성
if문 조건은 `reg함수` 리턴값과 input의 value사용해서 클래스 추가 제거
input에 이벤트 발생마다 대괄호 표기법을 사용 => 전역 객체 userInput에 값 덮어쓰기

---
```
function handleSubmit(event) {
  event.preventDefault();
  if (userInput.email === user.id && userInput.password === user.pw) {
    console.log('adfafadsfdsafafdsafsdafdasffdad');
    window.location.href = 'welcome.html'
  } else {
    alert('id 또는 pw가 일치하지 않는다');
  };
};
```
`event.preventDefault()` 메서드 사용으로 페이지 새로고침 방지
입력 받은 문자열을 할당한 전역객체 `userInput`와 기존 `user` 객체 key value 비교해서 조건 검사





