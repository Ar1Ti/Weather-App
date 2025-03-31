const key = "fddb24e68b201ad28e409bc4491b4bab";
const url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const searchInp = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon") 

async function checkweather(city){
    const response = await fetch(url + city +`&appid=${key}`);
    var data = await response.json();

    if(response.status == 404)
    {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".Weather").style.display = "none";
    }
    else{
        console.log(data);
        document.querySelector(".city-name").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/hr"
    
        if(data.weather[0].main == "Clouds")
        {
            weatherIcon.src = "clouds.png"
        }
        else if(data.weather[0].main == "Clear")
        {
            weatherIcon.src = "clear.png";
        }
        else if(data.weather[0].main == "Drizzle")
        {
            weatherIcon.src = "drizzle.png";
        }
        else if(data.weather[0].main == "Mist")
        {
            weatherIcon.src = "mist.png";
        }
        else if(data.weather[0].main == "Rain")
        {
            weatherIcon.src = "rain.png";
        }
        else if(data.weather[0].main == "Snow")
        {
            weatherIcon.src = "snow.png";
        }
    
        document.querySelector(".Weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkweather(searchInp.value);
})

// checkweather();