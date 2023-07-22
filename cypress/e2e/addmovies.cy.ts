import { describe } from "mocha"

 describe ('template spec', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/addmovie')
      cy.get(':nth-child(1) > .form-label').type("1");
      cy.get(':nth-child(2) > .form-label').type("Movie15");
      cy.get(':nth-child(3) > .form-label').type("theatre15");
      cy.get(':nth-child(4) > .form-label').type("85");
      cy.get(':nth-child(5) > .form-label').type("Available");
     
    })
  })