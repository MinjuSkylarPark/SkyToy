const title = document.querySelector("div#hello:first-child h1")

title.innerText = "sub"

function handlClicked(){
    console.log("hey over here")
}

title.addEventListener("click",handlClicked)

