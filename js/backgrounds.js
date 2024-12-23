const images = ["0.jpg", "1.jpg", "2.jpg"]

const chosenImage = images[Math.floor(Math.random() * images.length)]

//html 요소를 생성 - createElement(" ")
const bgImage = document.createElement("img")

bgImage.src = `img/${chosenImage}`

// 함수 안의 경로에 정의한 값을 가장 뒤에서 기입
document.body.appendChild(bgImage)