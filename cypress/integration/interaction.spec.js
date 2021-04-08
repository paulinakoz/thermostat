describe('Thermostat Interactions', () => {
    beforeEach(() => {
        cy.visit('./index.html')
    })

    describe('Testing the UP button', () => {
        it('shows 20 on the page as the default temperature', () => {
            cy.contains(20);
        })
    
        it('shows 21 when I click the UP button', () => {
            cy.get('#up-button').click();
            cy.contains(21);
        })
    
        it('shows 23 when I click the button three times', () => {
            cy.get('#up-button').click();
            cy.get('#up-button').click();
            cy.get('#up-button').click();
            cy.contains(23);
        })
    })
    
    describe('Testign the DOWN button', () => {
        it('shows 19 when I click the down button', () => {
            cy.get('#down-button').click();
            cy.contains(19);
        })

        it('shows 18 when I click the down button twice', () => {
            cy.get('#down-button').click();
            cy.get('#down-button').click();
            cy.contains(18);
        })
    })

    describe('Testing the RESET button', () => {
        it('resets the temperature back to 20', () =>{
            cy.get('#down-button').click();
            cy.get('#down-button').click();
            cy.get('#reset-button').click();
            cy.contains(20);
        })
    })

    describe('Testing Power Saving Mode', () => {
        it('PSM ON button turns power saving mode on', () => {
            cy.get('#PSM-ON').click();
            cy.contains('Power Saving Mode is ON');
        })

        it('PSM OFF button turns power saving mode off', () => {
            cy.get('#PSM-OFF').click();
            cy.contains('Power Saving Mode is OFF');
        })
    })
})