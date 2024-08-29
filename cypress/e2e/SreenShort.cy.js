/// <reference types="cypress" />


describe("mysuite", () => {
  it("Screen Short", () => {
    cy.visit("https://www.opencart.com/index.php?route=common/home");
    // cy.screenshot("homepage");
    // cy.wait(2000);
    // cy.get(".logo").screenshot("logo");

//***Automatically capture screenshort and video on failure */
  
cy.contains('a[href="#tab-unlimited"][data-toggle="tab"]').click()
  cy.get('.col-sm-5.col-md-5').should('have.text','Free space')
  });
});
