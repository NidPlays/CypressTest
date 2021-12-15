// start with npx cypress open

describe('Test with explain', () => {
    it('Does stuff on example cypress site ', () => {
        //visits the site provided

        cy.visit('https://example.cypress.io')

        //cy.pause()


        //open selector playground to get elements with their ids etc


        //clicks the first element which has 'type' in its data
        cy.contains('type').click()
        //assertion for url to include /commands/actions
        cy.url().should('include', '/commands/actions')

        //next part
        //goes to element containing class .action-email
        //then types an email and checks
        cy.get('.action-email', {timeout:6000})
            .type('nid@myemaildomain.com')
            //checks
            //.should('have.value', 'fake@email.com')
            .should('have.value', 'nid@myemaildomain.com')



        cy.get('.action-disabled')
            .type('disabled error checking', { force: true })
            //will show error when force is not enabled, user cannot go through when button is disabled normally
            //.type('disabled error checking')
            .should('have.value', 'disabled error checking')
            //clear is chained function which is used to clear the input box then checks
            //.clear() will fail again because it's disabled
            .clear({force:true})
            .should('have.value','')


        //using #idname would be the id element in html .classname would be for class

        // cy.get('#action-canvas').click()
        //
        // //has inbuilt positions
        // //Valid positions are topLeft, top, topRight, left, center, right, bottomLeft, bottom, and bottomRight.
        // cy.get('#action-canvas').click('topLeft')
        // cy.get('#action-canvas').click('top')
        // cy.get('#action-canvas').click('topRight')
        // cy.get('#action-canvas').click('left')
        // cy.get('#action-canvas').click('right')
        // cy.get('#action-canvas').click('bottomLeft')
        // cy.get('#action-canvas').click('bottom')
        // cy.get('#action-canvas').click('bottomRight')

        // .click() accepts an x and y coordinate
        // that controls where the click occurs
        cy.get('#action-canvas')
            .click(40, 180)
            .click(40, 160)
            .click(40, 140)
            .click(40, 120)
            .click(40, 100)

            .click(50,120)
            .click(55,130)
            .click(60,140)
            .click(65,150)
            .click(70,160)

            .click(80, 180)
            .click(80, 160)
            .click(80, 140)
            .click(80, 120)
            .click(80, 100)

        // click multiple elements by passing multiple: true
        cy.get('.action-labels>.label').click({ multiple: true })

        // Ignore error checking prior to clicking
        cy.get('.action-opacity>.btn').click({ force: true })


        //checking form boxes
        cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]')
            .check().should('be.checked')

        cy.get('.action-radios [type="radio"]').not('[disabled]')
            .check().should('be.checked')

        // .check() accepts a value argument
        cy.get('.action-radios [type="radio"]')
            .check('radio1').should('be.checked')

        // .check() accepts an array of values
        cy.get('.action-multiple-checkboxes [type="checkbox"]')
            .check(['checkbox1', 'checkbox2']).should('be.checked')

        // Ignore error checking prior to checking
        cy.get('.action-checkboxes [disabled]')
            .check({ force: true }).should('be.checked')

        cy.get('.action-radios [type="radio"]')
            .check('radio2', { force: true }).should('be.checked')
            //.check('radio1', { force: true }).should('be.checked')

    })
})