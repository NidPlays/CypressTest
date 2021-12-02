// start with npx cypress open

describe('My First Test', () => {
    it('finds the content "type"', () => {
        //visits the site provided
        cy.visit('https://example.cypress.io')
        //clicks the first element which has 'type' in its data
        cy.contains('type').click()
        //assertion for url to include /commands/actions
        cy.url().should('include', '/commands/actions')

        //next part
        //goes to element containing class .action-email
        //then types an email and checks
        cy.get('.action-email')
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
            //.clear() will fail again because its disabkes
            .clear({force:true})
            .should('have.value','')


        //using #idname would be the id element in html .classname would be for class
        /*
        cy.get('#action-canvas').click()

        //has inbuilt positions
        //Valid positions are topLeft, top, topRight, left, center, right, bottomLeft, bottom, and bottomRight.
        cy.get('#action-canvas').click('topLeft')
        cy.get('#action-canvas').click('top')
        cy.get('#action-canvas').click('topRight')
        cy.get('#action-canvas').click('left')
        cy.get('#action-canvas').click('right')
        cy.get('#action-canvas').click('bottomLeft')
        cy.get('#action-canvas').click('bottom')
        cy.get('#action-canvas').click('bottomRight')

        // .click() accepts a an x and y coordinate
        // that controls where the click occurs
        cy.get('#action-canvas')
            .click(80, 75)
            .click(170, 75)
            .click(80, 165)
            .click(100, 185)
            .click(125, 190)
            .click(150, 185)
            .click(170, 165)


         */


        // click multiple elements by passing multiple: true
        //cy.get('.action-labels>.label').click({ multiple: true })

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
            //.check('radio2', { force: true }).should('be.checked')

    })
})