const toDoForm = document.getElementById("todo-form");
const toDoinput = toDoForm.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY="todos";

const toDos=[];//새로운 toDo들은 사용자가 입력하는 값들

function saveToDos(){
    //todo를string array로 변환하여 localStorage에 저장
    localStorage.setItem("todos",JSON.stringify(toDos));
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
//단지 newTodo들만 모아서 localStorage에 저장
}
function deleteTodo(event){
  const li = event.target.parentElement;
  li.remove();
}
function paintTodo(newTodo){//하단의 newTodo인자 정보받아오기
 const li = document.createElement("li")
 const span = document.createElement("span")
 span.innerText = newTodo;
 const button = document.createElement("button");
 button.innerText = "x"
 button.addEventListener("click",deleteTodo)
//이벤트 리스너로 click-> effect로 투두지우는 deleteTodo실행

 li.appendChild(span);
 li.appendChild(button);
 span.innerText = newTodo;
 toDoList.appendChild(li);
//  span안에 넣은 새로운 텍스트는 사용자가 todo-form에서 우리에게 준 newTodo값
//  이제 할 일은 새로운 li를 todoList에 추가하는 것 
}
function handleToDoSubmit(event){
 event.preventDefault(); 
 const newTodo = toDoinput.value;//<--input의 현재value를 새로운 변수에 복사
 //초기화하기 전에 먼저 저장
 toDoinput.value=""//그 다음 값 초기화
 toDos.push(newTodo);//new Todo들만 모아서 localStorage에 저장ㄴ
 paintTodo(newTodo);//압력값을 painttodo에 넣어서 호출
 saveToDos();
}
toDoForm.addEventListener("submit",handleToDoSubmit)

function sayHello(){
    console.log("this is the turn of",item)}

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null){
    const parsedToDos = JSON.parse(savedTodos);
    parsedToDos.forEach(paintTodo);
}



