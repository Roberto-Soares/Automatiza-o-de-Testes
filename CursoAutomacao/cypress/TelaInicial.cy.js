/// <reference types = "cypress"/>

describe("Testando a tela inical", ()=>{
    beforeEach(function(){
        cy.visit('/')
    })

    it('Validar os botões na tela', ()=>{

        cy.get('a[href="./login.html"]')
        .should('be.visible')
        cy.log('botão voltar visivel')

        cy.get('a[href="texto.html"]')
        .should('be.visible')
        cy.log('Botão texto visivel')

        cy.get('a[href="imagem.html"]')
        .should('be.visible')
        cy.log('Botão Immagem visivel')
    })
})