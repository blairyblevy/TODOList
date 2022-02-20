const todoForm = document.getElementById("Todo-form")
const todoinput = document.querySelector("#Todo-form input")
const todolist = document.getElementById("todo-list")

let todos = []; //항상 빈 array로 시작한다.
const TODOS_KEY = "toDos"

function saveTodo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos)); //todos를 localStorage에 넣는다. 그리고 todos를 array로 저장한다.
}


function deleteTodo(event) {
    const li = event.target.parentElement; //버튼의 부모를 li에 저장
    li.remove() //li를 지움
    todos = todos.filter((todo)=> todo.id !== parseInt(li.id)); //todo의 id가 li의 id와 다른 걸 남김,,parseInt로 문자열을
    //숫자로 바꿈,, todos DB에서 todo를 지운뒤 
    saveTodo() //saveTodo를 불러와야 함
}


function paintTodo(newTodo){
    const Li = document.createElement("li"); //Li를 만듦
    Li.id = newTodo.id;
    const span = document.createElement("span"); //span을 만듦
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo)
    Li.appendChild(span); //span을 Li에 넣음 
    Li.appendChild(button);
    todolist.appendChild(Li); //Li를 todolist에 넣음
}


function handletodosubmit(event) {
    event.preventDefault() //새로고침 막기
    const newTodo = todoinput.value; //값 저장하기
    todoinput.value = ""; // 빈칸 만들기
    const newTodoobject = {
        text : newTodo,
        id : Date.now(),  //id로 각각의 li item을 구별함
    };
    todos.push(newTodoobject); // todos배열에 newTodoobject를 추가함
    paintTodo(newTodoobject); //paintTodo함수 호출
    saveTodo();
}

todoForm.addEventListener("submit", handletodosubmit )

//localstorage에서 value를 가져오고 String을 array로 변환시킴

const savedTodos = localStorage.getItem(TODOS_KEY)

if(savedTodos){ //savedTodos가 존재한다면
    const parsedTodo = JSON.parse(savedTodos); //array로 만들어줌
    todos = parsedTodo; //새로고침해도 원래 있던 값 그대로 있고, 새로운 값도 잘 저장된다.
    parsedTodo.forEach(paintTodo);
}