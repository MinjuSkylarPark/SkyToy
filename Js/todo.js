//  todo-list를 나열하기위한 form생성
// form과 ul을 HTML에서 JS로 가져가는 코드 생성
const todoForm = document.querySelector("#todo-form")
const todoInput = todoForm.querySelector("input")
const todoList = document.querySelector("#todo-list")

//저장된 값을 불러오고 화면에 그려줄건데 array는 호출못함 그래도 걍해봄
const toDos = [];

function saveTodos(){
    localStorage.setItem("todos",toDos)
}
//saveTodos가 하는 일은 array를 localStorage에 넣는 거 걍 그게 끝


function deleteTodo(event){
    //li의 부모객체에 접근해 삭제하는 것을 돕는다.
 const li = event.target.parentElement;
 li.remove();
}

function paintTodo(newTodo){
    //newTodo 내부에 들어갈 인자는 텍스트가됨
    const li = document.createElement("li")
    const span = document.createElement("span")
    span.innerText = newTodo;
    //span내부의 텍스트변경
    const button = document.createElement("button")
    button.innerText ="'x'"
    button.addEventListener("click",deleteTodo)
    //li내부에 span이 없으므로 appendChild로 
    //li한테 자식입양시킴
    li.appendChild(span);
    li.appendChild(button);
    //span내부엔 text가없으므로 newTodo입력
    //html내부 todoList에 li삽입
    todoList.appendChild(li);
   
    //기억할 점 appendchild는 순서상 항상 마지막에있어야힘

}

//todo 제출을 제어하는 함수생성
function handleTodoSubmt(event){
    event.preventDefault();
    const newTodo = todoInput.value; //<---input의 현재 value를 새로운 변수에 복사
    //값 초기화 전에 입력값 저장
    todoInput.value=""
    toDos.push(newTodo);
    paintTodo(newTodo);
}

//preventDefault사용하여 handleTodosubmit으로 
//페이지 새로고침할 때마다 불필요한 데이터낭비 줄임
todoForm.addEventListener("submit",handleTodoSubmt)