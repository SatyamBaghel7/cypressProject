Cypress.Commands.add('goToApplication',()=>{
    const url = Cypress.env('baseUrl')
    cy.visit(url);
})