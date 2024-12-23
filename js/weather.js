const API_KRY = "892454ddb2af5d1d4994e57ba9e14edf"

//사용자의 위치 제공 후 날씨를 보여주기 
function onGeoOk(position){
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    console.log("You live it", lat, lon)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KRY}&units=metric`
    fetch(url).then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
        city.innerText = data.name
    })
}
function onGeoError() {
    alert("Can't find you. No weather for you.")
}

//에러일 경우와 올바를 경우 두 가지의 function을 만들어야함.
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)