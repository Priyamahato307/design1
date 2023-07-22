import { describe } from "mocha"
describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/home')
      cy.get('.adminHeader > :nth-child(2)').click();
      if(cy.get('.booking-container > :nth-child(1)').click()){
        cy.visit('http://localhost:3000/bookedTickets/Movie10')
      }else if(cy.get('.booking-container > :nth-child(2)').click()){
        cy.visit('http://localhost:3000/addmovie')
      }
    })
  })
  