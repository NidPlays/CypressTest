const users = Cypress.env('users')


//console.table(users)
describe('Users from API', () => {
    before(() => {
        // confirm the users data has been set
        expect(users).to.be.an('array').and.to.have.length(4)
    })

    beforeEach(() => {
        cy.visit('https://dev.wholesoftmarket.com/login')
    })

    users.forEach((user) => {
        it(`has the user ${user.id} ${user.email} ${user.password}`, () => {
            // confirm the user object has the expected keys
            expect(user).to.include.keys(['id', 'email', 'password'])
            // check the page
            //console.log(user)
            cy.get('[data-cy="CyEnterEmail"]')
                .type(user.email)
                .should('have.value', user.email)

            cy.get('[data-cy="CyEnterPassword"]')
                .type(user.password)
                .should('have.value',user.password)

            cy.get('.theme-btn > .btn').click()

            cy.get('.ng-trigger')
                .contains('Error')
                .then(($err) => {
                    console.log(user.email + ' has' +$err.text())
                    cy.get('.toast-message')
                        .then(($error) => {
                            console.log($error.text())

                        })
                })

        })
    })
})
