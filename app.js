let weather = {
    "apikey" : "d2f31d1def65d4dd1011a2327e068a30",
    fetchWeather : function(city) {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apikey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather : function(data){
        const { name } = data;
        const {icon , description } = data.weather[0];
        const {temp , humidity } = data.main
        console.log(name,icon,description,temp,humidity);
        document.querySelector(".city").innerText = name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = "Forecast : " + description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity : " + humidity;
    },
    search : function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};
document.querySelector(".search button").addEventListener( "click" , function () {
    weather.search();
})
document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }

})