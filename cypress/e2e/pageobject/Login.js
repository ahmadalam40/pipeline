// class LOGIN
// {
// setUserName(username)
// {
//     cy.get('input[name="username"]').type(username);
// }

// setPassword(password)
// {
//     cy.get('input[name="username"]').type(password)
// }

// ClicklogIn()
// {
//     cy.get('input[value="Log In"]').click()
// }


// }
// export default LOGIN;

class LOGIN
{

textUserName='input[name="username"]';
textPassword='input[name="username"]';
BtnSubmit='input[value="Log In"]';


setUserName(username)
{
    cy.get(this.textUserName).type(username);
}

setPassword(password)
{
    cy.get(this.textPassword).type(password)
}

ClicklogIn()
{
    cy.get(this.BtnSubmit).click()
}


}
export default LOGIN;