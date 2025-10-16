// create page that displays current weather details of a city. used: weatherapi.com

let key="b2bc05ae2740404ab63193754251310";


document.getElementById("getWeatherBtn").addEventListener("click", getWeather);

document.getElementById("cityInput").addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        getWeather();
    }
});
        
   
function getWeather() {
    let cityName = document.getElementById("cityInput").value.trim();
    if (cityName === "") {
        document.getElementById("weatherResult").innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    let weatherUrl = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${cityName}`;
    //lesson: you need back ticks ``, not quotes "" to use ${} for variables in a string


    fetch(weatherUrl)
        .then(response => {
            if (!response.ok){throw new Error(`HTTP error! Status: ${response.status}`);}
            return response.json();
        })

        .then(data => {
            let weatherHtml=`
            <h2>${data.location.name}, ${data.location.region}</h2>
            <p>Condition: ${data.current.condition.text}</p>
            <p>Temperature: ${data.current.temp_f}°F / ${data.current.temp_c}°C</p>
            <p>Wind: ${data.current.wind_mph} mph</p>
            <p>Humidity: ${data.current.humidity}%</p>
            `;
            document.getElementById("weatherResult").innerHTML = weatherHtml;
            })

        .catch(error => {
        document.getElementById("weatherResult").innerHTML = `<p style="color:red;">Error fetching weather data</p>`;
        console.error("Error fetching weather data:", error);
        });
}






//first test with hardcoded city
        // let cityName="washington";
        // let units="imperial";
        // let weatherUrl="http://api.weatherapi.com/v1/current.json?key=b2bc05ae2740404ab63193754251310&q=washington";

        // fetch(weatherUrl)
        //   .then(response => {
        //         if (!response.ok) {
        //         //throwing will skip to the .catch below
        //         throw new Error(`HTTP error! status: ${response.status}`);
        //          }   
        //         return response.json(); //parse JSON if status OK
        //     })
        //   .then(data => {
        //         //console.log(data);
        //         console.log("Location Name:", data.location.name);
        //         console.log("Current Weather:", data.current.condition.text);
        //         console.log("Temperature (F):", data.current.temp_f);
        //         console.log("Temperature (C):", data.current.temp_c);
        //         console.log("Wind (MPH):", data.current.wind_mph);
        //         console.log("Humidity (%):", data.current.humidity);
        //       })
        //   .catch(error => {
        //         console.error("Error fetching weather data:", error);
        //   });