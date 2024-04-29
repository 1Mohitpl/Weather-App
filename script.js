const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

const apiKey = "e3981d3c9d4db9429b073af64d0a9ef9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  
async function checkWeather(cityname) {
    try {
        const result = await fetch(apiUrl + cityname  + `&appid=${apiKey}`);
        if (!result.ok) {
            throw new Error('City not found or API request failed');
        }
        const data = await result.json();
        // console.log(data);               // just for checking

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main == "Clouds"){

            weathericon.src ="images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weathericon.src ="images/clear.png";
        }  else if (data.weather[0].main == "Rain"){
            weathericon.src ="images/Rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weathericon.src ="images/Drizzle.png";
        }  else if (data.weather[0].main == "Mist") {
            weathericon.src ="images/mist.png";
        }

        document.querySelector(".weather").style.display = "block"

    } catch (error) {
        console.error('Error fetching weather data:', error);
        // herer handle the error 
    }
}

    

      searchBtn.addEventListener("click", ()=>{

          checkWeather(searchBox.value);
      })
  
