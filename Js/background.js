


const images = ["0.jpeg","1.jpeg","2.jpeg"];

const chosenImage = images[Math.floor(Math.random()*images.length)]

//browser에서 출력해줄 배경이미지
const bgImage = document.createElement("img")

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

// const body = document.querySelector('body');

// const ImageNum =3;

// function printImage(imageNum){
//     const Image = new Image();
//     Image.src = `Img/${imageNum}`
//     body.appendChild(Image);
// }

// function genRandom(){
//     const number = Math.floor(Math.random()*ImageNum)+1;
//     return number;
// }

// function init(){
//     const randomNumber = genRandom();
//     printImage(randomNumber);
// }

// init();

