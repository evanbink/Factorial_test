/// <reference types="cypress" />

describe('Factorial Test', () => {
it('Visit Link Test',() =>{
    cy.visit('https://qa.putraprima.id/')

      // Positive
        cy.get('#input').type('1')
        cy.get('#hitung').click()
        cy.get('.row > :nth-child(3)').find('#result').then(function(a) {
            const t = a.text()
            expect(t).to.contains('1')
        })
    })
      it('Has wrong values', () => {
      // Negative
       cy.get('#input').type('6')
       cy.get('#hitung').click()
       cy.get('.row > :nth-child(3)').find('#result').then(function(a) {
        const t = a.text()
        expect(t).to.contains('1')
       })
      })
     
    })
