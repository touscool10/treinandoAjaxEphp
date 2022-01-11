$.ajax({
    type:"GET",
    url: "https://api.openweathermap.org/data/2.5/weather?q=sao%20paulo&appid=d370a0f7dcde95673f47bb59ecf7251b&units=metric&lang=pt",
    async: false
}).done(function(data) {
    console.log(data.main.temp);
    console.log(data.weather[0].description);
}).fail(function() {
    console.log('Erro');
})