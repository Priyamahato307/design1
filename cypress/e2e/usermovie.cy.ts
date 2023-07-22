import { describe } from "mocha"
describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/userHome')
      if(cy.get(':nth-child(1) > :nth-child(5) > .button-book').click()){
        cy.visit('http://localhost:3000/movieDetails/Movie8')
     }
     else if(cy.get(':nth-child(1) > :nth-child(6) > .button-book').click()){
       cy.visit('http://localhost:3000/bookingPage/Movie9/Theatre9/80')
     }
    })
  })