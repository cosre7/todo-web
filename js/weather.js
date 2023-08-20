const API_KEY = '66520d0a6defec2ab377f40f0b53a8d5';

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector('#weather img');
        const temp = document.querySelector('#weather span:nth-child(1)');
        const city = document.querySelector('#weather span:last-child');
        console.log(data);
        weather.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        temp.innerText = `${data.main.temp} ℃`; 
        city.innerText = data.name;
    });
}   

function onGeoError() {
    alert('can\'t find you. No weather for you.')
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
