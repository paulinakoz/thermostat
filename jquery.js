import {Thermostat} from './src/thermostat.js';

$(document).ready(function() {
    const thermostat = new Thermostat();

    const usageColour = function(){
        if(thermostat.colour() === 'low-usage'){
            $(("#temp")).css("color", "green");
        } else if(thermostat.colour() === 'medium-usage'){
            $(("#temp")).css("color", "orange");
        } else {
            $(("#temp")).css("color", "red");
        }
    }

    $("#up-button").click(function() {
        $("#temp").html(thermostat.up());
        usageColour();
    })

    $("#down-button").click(function() {
        $("#temp").html(thermostat.down());
        usageColour();
    })

    $("#reset-button").click(function() {
        $("#temp").html(thermostat.reset());
        usageColour();
    })

    $("#PSM-ON").click(function() {
        $("#PSM-OFF").css("color", "black")
        $(this).css("color", "green")
        thermostat.powerSavingMode = true;
        $("#temp").html(thermostat.reset());
        $("#isPSM").html('Power Saving Mode is ON');
    })

    $("#PSM-OFF").click(function() {
        $("#PSM-ON").css("color", "black")
        $(this).css("color", "green")
        thermostat.powerSavingMode = false;
        $("#isPSM").html('Power Saving Mode is OFF');
    })
    
    // display initial temperature
    $("#temp").html(thermostat.temperature);

    // make a request
    $.get("http://api.openweathermap.org/data/2.5/weather?q=London&appid=d18f51b6e5317323f7fb7e0df337c72f")
    .then(data => {
        // update the html element with the data
        $("#weather").html(`The temperature in London is ${Math.round(data.main.temp - 273.15)}ºC`)
    })
})