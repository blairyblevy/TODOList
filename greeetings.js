const LogInForm = document.querySelector("#Login-form");
const LogInInput = document.querySelector("#Login-form input");
const Greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLogInsubmit(event) {
    event.preventDefault(); //브라우저의 기본요소(새로고침)을 막는다
    LogInForm.classList.add(HIDDEN_CLASSNAME); //폼을 숨긴다
    const username = LogInInput.value
    localStorage.setItem("USERNAME_KEY", username);
    paintUsername(username); //h1에서 히든 클래스를 없앰
}
    
function paintUsername(username) {  //반복되는 코드는 함수로 만들어줌
    Greeting.innerText = `Hello! ${username}`;
    Greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem("USERNAME_KEY");

if (savedUsername === null){
    //폼을 보여줌
    LogInForm.classList.remove(HIDDEN_CLASSNAME);
    LogInForm.addEventListener("submit", onLogInsubmit);
}else{
    //greeting을 보여줌
    paintUsername(savedUsername);
}
