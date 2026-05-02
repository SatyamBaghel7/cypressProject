describe('Handling of Broken Link',()=>{
 it('All Broken Link',()=>{

    cy.visit('https://ecommerce-playground.lambdatest.io/')
    cy.get('a').each(($link)=>{
        const url1 = $link.attr('href');
        if(url1){
            cy.request({
                url:url1,
                failOnStatusCode:false
            }).then((response)=>{
                if(response.status >= 400){
                    cy.log(`Broken Link $url1`)
                    console.log(`Broken Link $url1`)
                }
            })
        }
    })
 })
})