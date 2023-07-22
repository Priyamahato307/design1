import { describe } from "mocha"
describe('template spec', () => {

    it('passes', () => {
      cy.visit('http://localhost:3000/resetPassword')
      cy.get(':nth-child(2) > .form-label').type("riyan@gmail.com")
      cy.get(':nth-child(3) > .form-label').type("pwd124")
      cy.get(':nth-child(4) > .form-label').type("pwd124")
     if( cy.get('.button-groups > :nth-child(2)').click()){
       cy.visit('http://localhost:3000/login/ishan@gmail.com')
     }
    })
  })