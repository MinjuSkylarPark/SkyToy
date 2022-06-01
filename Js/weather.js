const API_KEY ="4e6d7e9f6bf1a06f7de8a1a056f81b2d"

function OnGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    //url주소는 반드시 백틱으로 입력할 것 
    const url =  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}/${data.main.temp}`;   
    });
}
    function onGeoError(){
        alert("can't find you, no info")
}
    navigator.geolocation.getCurrentPosition(OnGeoOK,onGeoError)

