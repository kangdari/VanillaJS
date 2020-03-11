const weatherSpan = document.querySelector('#jsWeather');

const API_KEY ='469bd90f24d69d952c83b5064f1d1f75';

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(response => response.json()
    ).then(data => { // data: 날씨 정보 
        const temp = data.main.temp; // 현재 기온
        const weather = data.weather[0].main;
        const city = data.name; // 현재 지역
        weatherSpan.innerHTML = `${temp}, ${weather}, ${city}`;
    }); 
};

const handleGeoSuccess = (position) =>{
    const latitude = position.coords.latitude; // 위도
    const longitude = position.coords.longitude; // 경도
    localStorage.setItem('location', JSON.stringify({ // local 저장소에 저장
        latitude,
        longitude,
    }));
}
// 현재 위치 구하는 함수, navigator 객체 사용
const askLocation = () =>{
    navigator.geolocation.getCurrentPosition(handleGeoSuccess);
}

const loadedLocation = () =>{
    const location = localStorage.getItem('location');
    if(!location){
        askLocation();
    }else{
        const parsedLocation = JSON.parse(localStorage.getItem('location'));
        // 위도와 경도 값을 local 저장소에서 가져와 API 호출
        getWeather(parsedLocation.latitude, parsedLocation.longitude);
    }
}

const init1 = () =>{
    loadedLocation();
}

init1();

