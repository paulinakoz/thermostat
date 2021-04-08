import {Thermostat} from './src/thermostat.js';

$(document).ready(function() {
    const thermostat = new Thermostat();

    $("#up-button").click(function() {
        $("#temp").html(thermostat.up());
    })

    $("#down-button").click(function() {
        $("#temp").html(thermostat.down());
    })

    $("#reset-button").click(function() {
        $("#temp").html(thermostat.reset());
    })

    $("#PSM-ON").click(function() {
        thermostat.powerSavingMode = true;
        $("#temp").html(thermostat.reset());
        $("#isPSM").html('Power Saving Mode is ON');
    })

    $("#PSM-OFF").click(function() {
        thermostat.powerSavingMode = false;
        $("#isPSM").html('Power Saving Mode is OFF');
    })

    $("#temp").html(thermostat.temperature);
})