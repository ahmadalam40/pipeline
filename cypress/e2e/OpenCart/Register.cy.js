/// <reference types="cypress" />


describe('Register', () => {
    it('Register to OpenCart', () => {
      cy.visit('https://www.opencart.com/')
      cy.contains('a', 'Login').click({force: true})
      cy.wait(3000)
    })
  })

  
  

