const users = Cypress.env('users')


//console.table(users)
describe('Users from API', () => {
    before(() => {
        // confirm the users data has been set
        expect(users).to.be.an('array').and.to.have.length(4)
    })

    beforeEach(() => {
        cy.visit('https://dev.wholesoftmarket.com/signup')
    })

    users.forEach((user) => {
        it(`has the user ${user.id} ${user.email} ${user.password}`, () => {
            // confirm the user object has the expected keys
            expect(user).to.include.keys(['id', 'email', 'password'])

            cy.get(':nth-child(1) > .form-group > .form-control')
                .type(user.firstn)
                .should("have.value",user.firstn)

            cy.get(':nth-child(2) > .form-group > .form-control')
                .type(user.lastn)
                .should("have.value",user.lastn)

            cy.get(':nth-child(3) > .form-group > .form-control')
                .type(user.email)
                .should("have.value",user.email)
            // // check the page
            // //console.log(user)
            // cy.get('[data-cy="CyEnterEmail"]')
            //     .type(user.email)
            //     .should('have.value', user.email)
            //
            // cy.get('[data-cy="CyEnterPassword"]')
            //     .type(user.password)
            //     .should('have.value',user.password)

            //cy.get('.theme-btn > .btn').click()

            // cy.get('.ng-trigger')
            //     .contains('Error')
            //     .then(($err) => {
            //         console.log(user.email + ' has' +$err.text())
            //         cy.get('.toast-message')
            //             .then(($error) => {
            //                 console.log($error.text())
            //
            //             })
            //     })

        })
    })
})
