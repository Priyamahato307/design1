import { describe } from "mocha"
describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/bookingPage/Movie9/Theatre9/80')
      cy.get(':nth-child(1) > label').type("ishan@gmail.com")
      cy.get(':nth-child(2) > label').contains('Movie Name')
      cy.get(':nth-child(3) > label').contains("Theatre Name")
      cy.get(':nth-child(4) > label').type("2")   
       cy.get(':nth-child(5) > label').type("S5, S6")
       cy.get('.button').click()
    })
  })