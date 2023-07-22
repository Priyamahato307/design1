import { describe } from "mocha"
describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/movieDetails/Movie9')
      if(cy.get('.button-log').click()){
        cy.visit('http://localhost:3000/seats')
      }
    })
  })