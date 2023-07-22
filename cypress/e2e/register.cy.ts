import { describe } from "mocha"
describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/registration')
      cy.get(':nth-child(2) > .form-label').type("100")
      cy.get(':nth-child(3) > .form-label').type("priya")
      cy.get(':nth-child(4) > .form-label').type("mahato")
      cy.get(':nth-child(5) > .form-label').type("priya@gmail.com")
      cy.get(':nth-child(6) > .form-label').type("6788908697")
      cy.get(':nth-child(7) > .form-label').type("10066")
      cy.get(':nth-child(8) > .form-label').type("10066")
      cy.get(':nth-child(2) > .form-label').type("admin")
      cy.get('[type="submit"]').click();
      
    })
  })