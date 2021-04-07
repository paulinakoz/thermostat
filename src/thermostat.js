export class Thermostat {
    constructor() {
        this.temperature = 20;
        this.Max = 32;
        this.powerSavingMax = 25;
        this.Min = 10;
        this.powerSavingMode = true;
    }

    up(){ 
        let max = this.Max
        if(this.isPowerSaving()){
            max = this.powerSavingMax;
        }
        if(this.temperature < max){
            this.temperature ++;
        }
        return this.temperature;
    }

    down() {
        if(this.temperature > this.Min){
            this.temperature --;
        }
        return this.temperature;
    }

    isPowerSaving() {
        return this.powerSavingMode;
    }

    reset() {
        return this.temperature = 20;
    }

    colour() {
        if(this.temperature < 18){
            return 'low-usage';
        } else if (this.temperature <= 25){
            return 'medium-usage';
        } else {
            return 'high-usage';
        }
    }
}