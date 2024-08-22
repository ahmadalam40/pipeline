const Login = () => {

    describe('login', () => {
  
      it('parabankLogIn', () => {
              cy.visit('https://parabank.parasoft.com/parabank/index.htm')
              cy.get('input[name="username"]').type('testingjk@gmail.com')
              cy.get('input[name="password"]').type('Khan@2')
              cy.get('input[value="Log In"]').click()
            })
      
    });
      
    };
  
  export default Login