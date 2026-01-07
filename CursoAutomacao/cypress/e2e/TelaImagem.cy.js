/// <reference types = 'cypress'/>

describe('Testar Tela da Imagem', () => {
    beforeEach(function () {
        cy.visit('/')
    })

    it('Testar Botão da Imagem', () => {
        cy.get('a[href="imagem.html"]').should('be.visible').click()

        //Verificar o botão de voltar 
        cy.get('a[href="./index.html"]').should('be.visible')

        //Verificar o Titulo da pagina
        cy.get('h1').should('have.text', 'Curso Automação de Testes Bàsico')

        //Verificar se ah imagem
        cy.get('img[src="images/curso.png"]').should('be.visible')
        
    })


})