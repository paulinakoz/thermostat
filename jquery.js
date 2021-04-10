import {Thermostat} from './src/thermostat.js';
import {WeatherComponent} from './src/weather-component.js';

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
        $("#PSM-OFF").css("color", "black");
        $(this).css("color", "green");
        thermostat.powerSavingMode = true;
        $("#temp").html(thermostat.reset());
        $("#isPSM").html('Power Saving Mode is ON');
    })

    $("#PSM-OFF").click(function() {
        $("#PSM-ON").css("color", "black");
        $(this).css("color", "green");
        thermostat.powerSavingMode = false;
        $("#isPSM").html('Power Saving Mode is OFF');
    })
    
    // display initial temperature
    $("#temp").html(thermostat.temperature);

    $("#search").click(function() {
        new WeatherComponent($("#weather"), $('#search-bar').val());
    })

})