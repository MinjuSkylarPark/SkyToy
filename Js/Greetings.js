const LoginForm = document.querySelector("#login-form")
const LoginInput = document.querySelector("#login-form input")
const Greeting = document.querySelector("#greeting")
// const Greet = document.querySelector("#hello")


// Greet.innerText = "hey"

const HIDDEN_CLASSNAME ="hidden";
const USERNAME_KEY = "username";
 //string만 포함된 변수는 variable을 전부 대문자로 표기한다-관습
//변수명 반복적으로 사용하는 경우 변수의 변수를 대문자로 지정 직접입력시 실수하고 싶지않은 내마음 반영

function OnSubmit(event){
    event.preventDefault();//자동실행방지
    LoginForm.classList.add(HIDDEN_CLASSNAME)//유저값입력시 formhidden처리
    const username = LoginInput.value//LoginInput.value의 값을 username에 저장(/대입)
    localStorage.setItem("username",username)
     paintGreetings(username)
}  

LoginForm.addEventListener("submit",OnSubmit)

function paintGreetings(username) {
 Greeting.innerText = `Good morning ${username}, It is good to see you again `
 //먼저 사용자이름을 innerText에 입력함
 Greeting.classList.remove(HIDDEN_CLASSNAME);
//user값이 입력되면 hidden_classname을 제거함
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
// show the form - 유저정보가 없을 때
    LoginForm.classList.remove(HIDDEN_CLASSNAME)
    LoginForm.addEventListener("submit",OnSubmit)
}else{
paintGreetings(savedUsername)
//저장된 get.username 호출
}

//  link.addEventListener("click",handleClick)
//브라우저는 함수의 argument를 가진채로 호출하게됨