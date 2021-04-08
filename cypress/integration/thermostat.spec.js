import {Thermostat} from '../../src/thermostat.js';

let thermostat;

describe('Thermostat', () => {
    beforeEach(() => {
        thermostat = new Thermostat();
    })

    describe('Testing up() method', () => {
        context('when power saving mode is ON', () => {
            it('stops at 25', () => {
                for(let i = 0; i < 5; i++) {thermostat.up()}
                expect(thermostat.up()).equal(25);
            })

            it('is on by default', () => {
                expect(thermostat.isPowerSaving()).equal(true);
            })
        })

        context('when power saving mode is OFF', () => {
            beforeEach(() => {
                thermostat.powerSavingMode = false;
            })

            it('increases past 25', () => {
                for(let i = 0; i < 5; i++) {thermostat.up()}
                expect(thermostat.up()).equal(26);
            })

            it('stops at 32', () => {
                for (let i = 0; i < 12; i++) {thermostat.up()}
                expect(thermostat.up()).equal(32);
            })

            it('is off by default', () => {
                expect(thermostat.isPowerSaving()).equal(false);
            })
        })
    })

    describe('Testing down() method', () => {
        it('stops at 10', () => {
            for (let i = 0; i < 10; i++) {thermostat.down()}
            expect(thermostat.down()).equal(10);
        })
    })

    describe('Tetsing reset() method', () => {
        it('returns 20', () => {
            thermostat.up();
            thermostat.reset();
            expect(thermostat.reset()).equal(20);
        })
    })

    describe('Testing colour() method', () => {
        context('when temp is below 18', () => {
            it('returns correct message', () => {
                thermostat.temperature = 17;
                expect(thermostat.colour()).equal('low-usage');
            })
        })

        context('when temp is below of equal to 25', () => {
            it('returns correct message', () => {
                thermostat.temperature = 25;
                expect(thermostat.colour()).equal('medium-usage');
            })
        })

        context('when temp is above 25', () => {
            it('returns correct message', () => {
                thermostat.temperature = 28;
                expect(thermostat.colour()).equal('high-usage');
            })
        })
    })
})