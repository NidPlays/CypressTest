describe('Login Page test', () => {
    it('finds the content "type"', () => {


        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername')
            .type('Admin')
            .should('have.value', 'Admin')
        cy.get('#txtPassword')
            .type('admin123')
            .should('have.value', 'admin123')

        cy.get('#btnLogin').click()
        cy.url().should('include', '/index.php/dashboard')


        cy.get('#menu_pim_viewPimModule > b').click()
        cy.url().should("include", '/pim/viewEmployeeList')

        cy.get('#btnAdd').click()
        cy.url().should("include", '/pim/addEmployee')

        cy.get('#firstName')
            .type('Nidish')
            .should('have.value', 'Nidish')

        let r = (Math.random() + 1).toString(36).substring(7);
        console.log(r)


        cy.get('#middleName')
            .type(r)
            .should('have.value', r)

        cy.get('#lastName')
            .type('G')
            .should('have.value', 'G')

        let id = (Math.floor(Math.random() * 10000) + 1000)
        console.log(id)

        cy.get('#employeeId')
            .clear()
            .type(id)
            .should('have.value', id)

        cy.get('#btnSave').click()


        cy.url().should("include", '/pim/viewPersonalDetails/empNumber/')


        cy.get('#menu_admin_viewAdminModule > b').click()
        cy.url().should('include', '/index.php/admin/viewSystemUsers')

        cy.get('#btnAdd').click()
        cy.url().should('include', '/index.php/admin/saveSystemUser')

        cy.get('#systemUser_userType')
            .should('have.value', '2')
        cy.get('#systemUser_userType')
            .select('1')
            .should('have.value', '1')


        cy.get('#systemUser_employeeName_empName')
            .type('Nidish ' + r + ' G')
            .should('have.value', 'Nidish ' + r + ' G')

        let userno = (Math.floor(Math.random() * 10000) + 1000)
        cy.get('#systemUser_userName')
            .type('Nid' + userno)
            .should('have.value', 'Nid' + userno)

        cy.get('#systemUser_status')
            .should('have.value', '1')


        cy.get('#systemUser_password')
            .type('strongpassWord')
            .should('have.value', 'strongpassWord')

        cy.get('#systemUser_confirmPassword')
            .type('strongpassWord')
            .should('have.value', 'strongpassWord')

        cy.get('#btnSave').click()

        cy.url().should('include', '/index.php/admin/viewSystemUsers')

        cy.get('#searchSystemUser_userName')
            .type('Nid' + userno)
            .should('have.value', 'Nid' + userno)

        cy.get('#searchBtn').click()

        cy.get('#resultTable')
            .should('contain', 'Nid' + userno)

    })
})