/// <reference types="cypress" />

// const = Register{}
// describe('Register', () => {
//     it('parabank', () => {
//       cy.visit('https://parabank.parasoft.com/parabank/index.htm')
//       cy.contains('a', 'Register').click({force: true})
//       cy.get('input[name="customer.firstName"]').type('test')
//       cy.get('input[name="customer.lastName"]').type('QA')
//     })
//   })
const Register = () => {

  describe('Homepage', () => {

    it('parabank', () => {
            cy.visit('https://parabank.parasoft.com/parabank/index.htm')
            cy.contains('a', 'Register').click({force: true})
            cy.get('input[name="customer.firstName"]').type('Qa')
            cy.get('input[name="customer.lastName"]').type('test')
            cy.get('input[name="customer.address.street"]').type('Street:  216 Galts Ave City,Red Deer Country,Canada')
            cy.get('input[name="customer.address.city"]').type('Toronto')
            cy.get('input[name="customer.address.state"]').type('canada')
            cy.get('input[name="customer.address.zipCode"]').type('2210')
            cy.get('input[name="customer.ssn"]').type('221')
            cy.get('input[name="customer.username"]').type('testingjk@gmail.com')
            cy.get('input[name="customer.password"]').type('Khan@2')
            cy.get('input[name="repeatedPassword"]').type('Khan@2')
            cy.get('input[value="Register"]').click()
          })
    
  });
    
  };

export default Register

  
  

