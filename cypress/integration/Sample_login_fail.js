describe('Login Page Fail', () => {
    it('finds the content "type"', () => {


        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername')
            .type('Admin')
            .should('have.value', 'Admin')
        cy.get('#txtPassword')
            .type('wrongpass')
            .should('have.value', 'wrongpass')

        cy.get('#btnLogin').click()

        //cy.wait(1000*4)

        cy.get('#divLoginButton')
            .contains('Invalid', {ignoreCase: true})
            .then(($invalid) => {
                console.log($invalid.text())
            })

    })
})