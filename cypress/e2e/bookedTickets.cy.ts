import { describe } from "mocha"
describe('template spec', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000/bookedTickets/Movie10')
        if(cy.get('.adminHeader > :nth-child(2)').click()){
          cy.visit('http://localhost:3000/home')
        }
    })
  })