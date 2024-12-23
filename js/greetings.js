//const는 고정(항상), let은 재할당(가끔), var은 쓰지 않기
//console.log();
//false, true로 고정, null은 아무것도 없음(false랑은 다름. false라는 값이 있는것)
//undefined는 값을 할당하지 않은것
//설명이 필요하지 않은 데이터 리스트들은 array, 설명이 필요한 정보가 담긴 데이터 리스트들은 object
//object.--: 추가 혹은 변경(const여도 전체를 변경하지 않으면 변경이 가능함.)
//function은 캡슐화하여 여러번 실행할 수 있도록 하는 것, ()가 필수
//() 안에 argument를 넣어서 데이터를 받아올수 있음.
//console.log는 하지 않는 것이 좋음. 데이터를 받아서 사용하거나 콘솔이 아닌 화면에 결과를 출력하고 싶으면 return 사용하기 
//dir은 더 자세한 것을 가지고옴.
//prompt는 사용자에게 값을 받음. 그러나 코드의 실행을 멈춤 
//parseInt는 int 타입으로 바꾸는 것, isNaN은 NaN인지 아닌지 확인하는 것
//HTML에서 항목을 가지고 와서 JS를 통해 항목들을 변경함.
//HTML에서 설정된 ID, className 등이 JS에서도 꼭 같아야함.
//getElementsByClassName은 class를 받아올 때 사용함. === 여러 elements를 가지고 올 경우 
//querySelector는 element를 css 방식으로 검색할 수 있음. 단 첫번째만 가지고옴 - .class의 형식으로 가지고옴 ex) #(.)id:first-child
//querySeclectorAll은 배열 방식으로 가지고옴
//document.querySelector("#hello") === document.getElementById("hello")
//.addEventListener = ("",) == .on~~ = 
//classList.toggle은 안에 있는 것을 확인 후 제거하거나 추가함

//모든 EventListener function의 첫번째 argument는 항상 지금 먹 벌어진 일에 대한 정보임.
//preventDefault는 기본적으로 제공되는 function인데 브라우저의 기본 동작을 맏아줌

//login-form 찾기 - const loginForm = document.getElementById("login-form")
//login-form 안에 있는 iuput 찾기 - const loginInput = loginForm.querySelector("input");
const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
//login-form 안에 있는 button 찾기 - const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

//버튼 클릭 이벤트
function onLoginSumbit(event){
    //기본 동작 막기
    event.preventDefault()
    //제출시 입력 창 안 보이게 하기
    loginForm.classList.add("hidden")
    //입력한 값 가지고 오기
    //const username = loginInput.value
    const username = loginInput.value

    //유저의 이름을 저장
    localStorage.setItem(USERNAME_KEY, username)

    //유저의 이름을 변수에 저장 후 이름을 h1에 보이게 하기
    //greeting.innerText = `Hello ${username}`//"Hello" + username
    //greeting.classList.remove(HIDDEN_CLASSNAME)
    paintGreetings(username)

}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSumbit)
}else{
    paintGreetings(savedUsername)
}