


const images = ["0.jpeg","1.jpeg","2.jpeg"];

//Math.floor기존에 있는 숫자들을 내림처리하는 함수 11.1->11 / 12.3->12
//Math.random*()images.length가지고있는 전체images길이에서 랜덤으로 이미지 추출하여 브라우저에 전송
//원래는 images.length자리에 *10 같은 랜덤숫자가 들어감
const chosenImage = images[Math.floor(Math.random()*images.length)]

//browser에서 출력해줄 배경이미지
const bgImage = document.createElement("img")

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

const title = document.querySelector("bgImg")



