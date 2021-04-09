describe('Testing weather data', () => {
    beforeEach(() => {
        // intercepts any get requests going out to this url
        cy.intercept("GET", "http://api.openweathermap.org/data/2.5/*", { fixture: "weather-data.json" });
    })

    it('displays the correct temperature on the page', () => {
        cy.visit('../../index.html');
        cy.contains('The temperature in London is 10ºC');
    })
})