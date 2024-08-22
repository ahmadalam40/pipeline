/// <reference types="cypress" />


describe('Register', () => {
    it('parabank', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')
      cy.contains('a', 'Register').click({force: true})
      cy.get('input[name="customer.firstName"]').type('test')
      cy.get('input[name="customer.lastName"]').type('QA')
    })
  })

  
  

