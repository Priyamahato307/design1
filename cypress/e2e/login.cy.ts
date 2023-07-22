import { describe } from "mocha"
describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/login')
      cy.get(':nth-child(2) > .form-label').type('riyan@gmail.com')
      cy.get(':nth-child(3) > .form-label').type("riyan")
      if(cy.get('[type="submit"]').click()){
        cy.visit('http://localhost:3000/userHome')
      }
      else if(cy.get('.button-group > :nth-child(2)').click()){
        cy.visit('http://localhost:3000/registration')
      }
      else if(cy.get('.button-group > :nth-child(3)').click()){
        cy.visit('http://localhost:3000/resetPassword')
      }
        })
  })