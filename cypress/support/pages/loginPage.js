class LoginPage {

  elements = {
    textBox_username: () => cy.get('#user-name'),
    textBox_password: () => cy.get('#password'),
    loginButton: () => cy.get('#login-button')
  }

  fillUsername(username) {
    this.elements.textBox_username().type(username)
  }

  fillPassword(password) {
    this.elements.textBox_password().type(password)
  }

  clickButton() {
    this.elements.loginButton().click()
  }
}

export default new LoginPage()
