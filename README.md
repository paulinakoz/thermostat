# Thermostat

The goal of this challenge is to build a simple thermostat web application. Firstly I have written the business logic using javascript. I then hooked it up to a dynamic visual interface using jQuery - all within the browser. Finally, I fetched data from external sources and displayed them on the page - again, all using JS.

## Specification

- Thermostat starts at 20 degrees
- You can increase the temp with the up button
- You can decrease the temp with the down button
- The minimum temperature is 10 degrees
- If power saving mode is on, the maximum temperature is 25 degrees
- If power saving mode is off, the maximum temperature is 32 degrees
- Power saving mode is on by default
- You can reset the temperature to 20 by hitting  the reset button
- The thermostat should colour the display based on energy usage - < 18 is green, < 25 is yellow, otherwise red

## Domain model

| Objects | Properties | Messages | Context | Output|
| ----- | ----- | ------ | ----- |------ |
| Thermostat | Int | | Starts at 20 | Int |
|  | Int | up() |  Increases the temperature | temp(Int) |
|  | Int | down() |  Decreases the temperature | temp(Int) |
|  | | | Cant go lower than 10 | |
|  | | isPowerSaving() | If on max temp is 25| |
|  | | | If off max temp is 32 | |
|  | | | On by default | |
|  | | reset() |  Resets temperature to 20 | |
|  | | | On by default | |
|  | | usage() | If temp < 18 display green | |
|  | | | If temp < 25 display yellow | |
|  | | | Otherwise display red | |