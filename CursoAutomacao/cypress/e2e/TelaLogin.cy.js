/// <reference types="cypress"/>

describe("Testar a pagina de Login", () => {

    it("testar a tela de Login", () => {
        cy.visit('http://127.0.0.1:5500/login.html')

        cy.get('span[class="login-form-tittle"]')
            .contains('Faça o Login').should('contain', 'Faça o Login')

        //cy.get('input[class="input-form"]').eq(0) /* Maninpulaçao do EQ */

        cy.get('input[id="login"]')
            .should('be.visible').click().type('admin').should('have.value', 'admin')

        cy.get('input[id="senha"]')
            .should('be.visible').click().type('admin').should('have.value', 'admin')

        //Verificar se a imagem do projeto existe

        cy.get('img[src="./images/login.png"]')
        cy.get('img[class="margin-left-50"]').should('be.visible')

        //Verificar se o botão existe
        cy.get('button[class="login-form-btn"]').should('be.visible').contains('Login').click()

    })
})