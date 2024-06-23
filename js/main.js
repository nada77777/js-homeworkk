
const user = {
  id: 'asd@naver.com',
  pw: 'spdlqj123!@'
}

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

const userInput = {
  email: null,
  password: null,
}

const emailInput = document.querySelector('.user-email-input');
const passwordInput = document.querySelector('.user-password-input');
const form = document.querySelector('.login-form');


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


function reg(value, type) {
  console.log(value, type);
  return type === 'email' ? emailReg(value) : pwReg(value);
};


function handleSubmit(event) {
  event.preventDefault();
  if (userInput.email === user.id && userInput.password === user.pw) {
    console.log('adfafadsfdsafafdsafsdafdasffdad');
    window.location.href = 'welcome.html'
  } else {
    alert('id 또는 pw가 일치하지 않는다');
  };
};

emailInput.addEventListener('input', handleInput);
passwordInput.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

function emailReg(text) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}