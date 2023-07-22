import { describe } from "mocha"
describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/')
      if(cy.get(':nth-child(1) > .buttonlog').click()){
         cy.visit('http://localhost:3000/registration')
      }
      else if(cy.get(':nth-child(2) > .buttonlog').click()){
        cy.visit('http://localhost:3000/login/ishan@gmail.com')
      }
    })
  })