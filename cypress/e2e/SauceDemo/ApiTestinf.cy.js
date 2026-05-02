describe('Handling of Api Testcases',()=>{
 it('simple getrequest',()=>{
    cy.request('GET','https://json-placeholder.mock.beeceptor.com/posts').then((res)=>{
        cy.wrap(res.status).should('eq',200)
        cy.wrap(res.body).should('not.be.empty').and('have.length',10)
        cy.wrap(res.body[0]).should('have.property','id')
        cy.log(JSON.stringify(res))
    })
 })
})