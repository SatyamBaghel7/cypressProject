describe('Handling All types of Window', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    it.skip('should navigate to new window URL', () => {

        cy.visit('https://www.hyrtutorials.com/p/window-handles-practice.html');

        cy.window().then(win => {

            cy.stub(win, 'open').callsFake((url) => {
                win.location.href = url;   // store popup URL
            });

        });
        cy.get('#newWindowBtn').click();
        // now Cypress controls new page
        cy.url().should('include', 'basic-controls');

        cy.get('#firstName').type('Satyam');

        cy.title().then(title => {
            cy.log("Title is: " + title);
        });

    });



    it.skip('Directly removing target attribute', () => {

        cy.visit('https://www.hyrtutorials.com/p/window-handles-practice.html');
        cy.title().then((title) => {
            cy.log('Page title is: ' + title)
        })
        cy.get('#newWindowBtn')
            .invoke('removeAttr', 'target')
            .click();
        cy.get('#firstName').type("Satyam");

    })

    it('to check if link is available', () => {

        cy.visit('https://www.hyrtutorials.com/p/window-handles-practice.html');

        cy.window().then(win => {
            cy.stub(win, 'open').as('windowOpen');
        });

        cy.get('#newWindowBtn')
            .should('be.visible')
            .click();
        cy.get('@windowOpen').then(stub => {
            cy.log('Call count: ' + stub.callCount);
        });
        // Wait and assert
        cy.get('@windowOpen')
            .should('exist')
            .and('have.been.calledOnce');
    });


});