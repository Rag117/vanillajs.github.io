const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list")

const TODOS_KEY = "todos"

//toDos의 이전 복사본을 잊어버리는 문제점 발생, const -> let
let toDos = []

//todo list를 저장하는 함수 설정, 그러나 string의 형태로 저장됨. 
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteTodo(event){
    const li = event.target.parentElement
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
    //toDo.id는 number, li.id는 string == 다르기 때문에 지워지지 않음  
    li.remove()
    saveToDos()
}

function paintTodo(newTodo){
    const li = document.createElement("li")
    li.id = newTodo.id
    const span = document.createElement("span")
    span.innerText = newTodo.text
    const button = document.createElement("button")
    button.innerText = "❌"
    button.addEventListener("click", deleteTodo)
    li.appendChild(span)
    li.appendChild(button)
    toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
    event.preventDefault()
    const newTodo = toDoInput.value
    toDoInput.value = ""
    //문제점 todo를 지울 때 localstorage에 업데이트 하지 않음. 어떤 todo text를 데이터베이스에서 지워야할지
    //id와 text부분을 따로 만들자. id는 ms 단위로 구분하게끔 만들자
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj)
    paintTodo(newTodoObj)
    saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)

//String을 object로 바꾸기 위해 JSON.parse()라는 함수를 사용함. --> 이 과정에서 Array 형태로 바뀜.
const savedToDos = localStorage.getItem(TODOS_KEY)
if(saveToDos !== null ){
    const parsedToDos = JSON.parse(saveToDos)
    //전에 있던 todo를 복원
    toDos = parsedToDos
    //배열에 있는 각각의 item에 대해 한 개의 function만 실행을 하게해줌.
    parsedToDos.forEach(paintTodo);
    //parsedToDos.forEach(item) => console.log(" ", item) == function ~~
}

//지우고 싶은 item을 제외하고 새 배열 만들기, 지우고 싶은 item을 제거
//.filtet 새 배열에서 object를 유지하고 싶으면 함수가 true를 리턴해야함. false 리턴 시 유지하지 않음
 