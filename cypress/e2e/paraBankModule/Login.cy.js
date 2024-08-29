import LOGIN from "../pageobject/Login";
const Login = () => {
  describe("login", () => {
    it("parabankLogIn", () => {
      cy.visit("https://parabank.parasoft.com/parabank/index.htm");

      // When not using pageobject
      //   cy.get('input[name="username"]').type('testingjk@gmail.com')
      //   cy.get('input[name="password"]').type('Khan@2')
      //   cy.get('input[value="Log In"]').click()

      //   *** When using pageobject***
      // const ln = new LOGIN();
      // ln.setUserName("testingjk@gmail.com");
      // ln.setPassword("Khan@2");
      // ln.ClicklogIn();

      //   *** When using pageobject with fixture**
      cy.fixture("ParaBank").then((data) => {
        const ln = new LOGIN();
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.ClicklogIn();
      });
    });
  });
};

export default Login;
