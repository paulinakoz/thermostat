//importing modules
import {Thermostat} from './src/thermostat.js';

//ensure page has loaded before interacting with DOM
window.addEventListener('load', function() {
    //creating a thermostat 
    const thermostat = new Thermostat();

    //grabbing elements from the document
    const tempElement = document.getElementById("temp");
    const upButton = document.getElementById("up-button");
    const downButton = document.getElementById("down-button");
    const resetButton = document.getElementById("reset-button");
    const isPSM = document.getElementById("isPSM");
    const PSMON = document.getElementById("PSM-ON");
    const PSMOFF = document.getElementById("PSM-OFF");

    //creating event listeners
    upButton.addEventListener('click', function() {
        tempElement.innerHTML = thermostat.up();
    })

    downButton.addEventListener('click', function() {
        tempElement.innerHTML = thermostat.down();
    })

    resetButton.addEventListener('click', function() {
        tempElement.innerHTML = thermostat.reset();
    })

    PSMON.addEventListener('click', function() {
        thermostat.powerSavingMode = true;
        tempElement.innerHTML = thermostat.reset();
        isPSM.innerHTML = 'Power Saving Mode is ON';
    })

    PSMOFF.addEventListener('click', function() {
        thermostat.powerSavingMode = false;
        isPSM.innerHTML = 'Power Saving Mode is OFF';
    })

    //set initial temperature
    tempElement.innerHTML = thermostat.temperature;
})


