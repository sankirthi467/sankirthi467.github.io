const weatherAPI = {key: "e176f2aad946b91ba0852ae9cde2d368", 
                     baseUrl:  "https://api.openweathermap.org/data/2.5/weather"};

const searchinp = document.getElementById('input-box');
searchinp.addEventListener('keypress',(event)=>{
    if(event.keyCode==13)
    {
        getWeather(searchinp.value);
        document.querySelector('.weather-box').style.display="block";
    }
});

function getWeather(city){
    fetch(`${weatherAPI.baseUrl}?q=${city}&appid=${weatherAPI.key}&units=metric`).then(weather=>{
        return weather.json();
    }).then(showWeather);
}

function showWeather(weather){
    let city = document.getElementById('city');
    city.innerText = `${weather.name},${weather.sys.country}`;

    let date = document.getElementById('date');
    date.innerText=dateManagefunc(new Date());

    let temp = document.getElementById('temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;
    let minmaxtemper= document.getElementById('minmaxtemp');
    minmaxtemper.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;
    let type = document.getElementById('sky');
    type.innerText=`${weather.weather[0].main}`;


    if(type.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('clear.jpg')";
        document.body.style.backgroundSize="contain";
        
    } 
    else if(type.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url('clouds.jpg')";
        document.body.style.backgroundSize="contain";
        
    } 
    else if(type.textContent == 'Haze') {

        document.body.style.backgroundImage = "url('haze.jpg')";
        document.body.style.backgroundSize="contain";
        
    }     
    else if(type.textContent == 'Rain') {
        
        document.body.style.backgroundImage = "url('rain.jpg')";
        document.body.style.backgroundSize="contain";
        
    }   
     else if(type.textContent == 'Smoke') {
        
    document.body.style.backgroundImage = "url('smoke.jpg')";
    document.body.style.backgroundSize="contain";
    
    }
    else if(type.textContent == 'Fog') {
        
        document.body.style.backgroundImage = "url('fog.jpg')";
        document.body.style.backgroundSize="contain";
        
    } 
    else if(type.textContent == 'Snow') {
        
        document.body.style.backgroundImage = "url('snow.jpg')";
        document.body.style.backgroundSize="contain";
    
    } 
    else if(type.textContent == 'Thunderstorm') {
    
        document.body.style.backgroundImage = "('thunderstorm.jpg')";
        document.body.style.backgroundSize="contain";
        
    } 
}

function dateManagefunc(todaydate){
    let week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months= ['January','February','March','April','May','June','July','August','September','October','November','December'];
    let year = todaydate.getFullYear();
    let month = months[todaydate.getMonth()];
    let date= todaydate.getDate();
    let day = week[todaydate.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}


