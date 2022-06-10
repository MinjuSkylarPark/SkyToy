//  todo-list를 나열하기위한 form생성
// form과 ul을 HTML에서 JS로 가져가는 코드 생성
const todoForm = document.querySelector("#todo-form")
const todoInput = todoForm.querySelector("input")
const todoList = document.querySelector("#todo-list")

//savedTodos function생성이후 todos가 중복되면서
//"todos"의 값을가진 TODOS_KEY 변수생성
const TODOS_KEY = "todos";

//push 될 업데이트가능한todolist
let toDos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos))
}
//userid로 todos를 주고 toDos를 array형태로 콘솔에 출력
//saveTodos가 하는 일은 array를 localStorage에 넣는 거 걍 그게 끝


function deleteTodo(event){
 const li = event.target.parentElement;//li의 부모객체에 접근해 삭제하는 것을 돕는다.
 console.log(li.id);
 li.remove();
 toDos = toDos.filter((todo)=>todo.id !== parseInt(li.id));
 saveTodos();
}

function paintTodo(newTodo){
    //newTodo 내부에 들어갈 인자는 텍스트가됨
    const li = document.createElement("li")
    li.id = newTodo.id
    const span = document.createElement("span")
    span.innerText = newTodo.text;
    //span내부의 텍스트변경
    const button = document.createElement("button")
    button.innerText ="x"
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
    //newTodo를 그리기전에 toDos array를 가져와서 newTodo를 push할 거
    const newTodo = todoInput.value; //<---input의 현재 value를 새로운 변수에 복사
                                    //값 초기화 전에 입력값 저장
    todoInput.value=""//form을 submit하면 input을 비우고 
    const newTodoObj ={
        text : newTodo,
        id : Date.now(),
    }
   
    toDos.push(newTodoObj);//newTodo를 todos array에 푸쉬한 다음
    paintTodo(newTodoObj);//화면에 푸쉬된 새로운 todo를 그려줌
    saveTodos();
}

//preventDefault사용하여 handleTodosubmit으로 
//페이지 새로고침할 때마다 불필요한 데이터낭비 줄임
todoForm.addEventListener("submit",handleTodoSubmt)


const savedTodos = localStorage.getItem(TODOS_KEY);

//Json.parse를통해 object형식으로 바꿔줌
//jssms array내부 각각의 item에대해 function을 실행할 수 있게해준다.

//savedTodos가 null이 아닐경우 
if(savedTodos !== null){
    const parsedTodos= JSON.parse(savedTodos)
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}

