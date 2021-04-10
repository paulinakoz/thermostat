export class WeatherComponent {
    constructor(element, city) {
        this.element = element;
        this.city = city;

        this.render();
    }

    render(){
        // make a request
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + this.city + "&appid=d18f51b6e5317323f7fb7e0df337c72f", (json) => {
            // update the html element with the data
            this.element.html(`The temperature in ${this.city} is ${Math.round(json.main.temp - 273.15)}ºC`)
        })
    }
}