/// <reference types="cypress" />

describe('Factorial Test', () => {
    it('Visit Link Test',() =>{
        cy.visit('https://qa.putraprima.id/')
    
        // Verify values not be blank
        cy.get('#hitung').click()
        cy.get('.row > :nth-child(3)').find('#result').then(function(a) {
            const t = a.text()
            expect(t).to.contains('integer')
        // .should('have.text','Please enter an integer')
        })  
    })

    it('Visit Link Test',() =>{
        cy.visit('https://qa.putraprima.id/')
    
        // Verify values not be blank
        cy.get('#hitung').click()
        cy.get('.row > :nth-child(3)').find('#result').then(function(a) {
            const t = a.text()
            expect(t).to.contains('noll')
        // .should('have.text','Please enter an integer')
        })  
    })

})