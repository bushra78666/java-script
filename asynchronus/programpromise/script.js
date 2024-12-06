let cityname = prompt("enter a city name");
fetch("https://openweathermap.org/api ")
.then(raw=>{
    return raw.json();
})
.then(data=>{
    const cityName = data.name
    const temparature = data.main.temp;
    const weathercondition = data.weather[0].description;
    const  humidity = data.main.humidity;

    console.log(`City : ${cityName}`)
    console.log(`Temparature : ${temparature} C`)
    console.log(`Weather: ${weathercondition}`)
    console.log(`Humidity : ${humidity}%`)
})