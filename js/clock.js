const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date()
    const hours = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")
    const seconds = String(date.getSeconds()).padStart(2, "0")
    clock.innerText = (`${hours}:${minutes}:${seconds}`)
    //0~9초에서 한 자릿수만 나오는 문제가 발생함. - .padStart(자릿수, "채울숫자")
}

getClock()
//서버 확인 등, 일정 시간에 따른 작업 등
setInterval(getClock, 1000)