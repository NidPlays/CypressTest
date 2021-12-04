describe('Login Page Fail', () => {
    it('finds the content "type"', () => {


        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername')
            .should('have.value', '')
        cy.get('#txtPassword')
            .type('wrongpass')
            .should('have.value', 'wrongpass')

        cy.get('#btnLogin').click()

        //cy.wait(1000*4)

        cy.get('#divLoginButton')
            .contains('Username', {ignoreCase: true})
            .then(($invalid) => {
                console.log($invalid.text())
            })

    })
})