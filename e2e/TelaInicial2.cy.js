/// <reference types= 'cypress'/>

describe('Testes na Tela Index', () => {
    beforeEach(function () {
        cy.visit('/')
    })

    it('Testar botão de texto', () => {
        cy.get('button').contains('Texto').should('be.visible').click()

        /*Verficcar pagina Texto*/
        cy.get('div[class="all"]').find('h1[class="title"]').should('have.text', 'Curso Automação de Testes Bàsico')

        cy.get('div[class="all"]').find('h2').should('have.text', ' Automação de testes')

        cy.get('div[class="all"]').find("p").should('have.text', ' A automação de testes é uma área em franca expansão, no entanto, é uma área ainda muito imatura. Muitos dos sucessos nos projetos de automação de testes são decorrentes de processos empíricos de tentativa e erro.\n\n                Para piorar a situação, a automação de testes ainda é objeto de mitos que geram percepções errôneas sobre os seus reais benefícios e limitações.')

        cy.get('a[href="./index.html"]').find('button').contains('Voltar Ao ìnicio').should('be.visible').click()
        
        //cy.get('h1[class="title"]')

    })


})