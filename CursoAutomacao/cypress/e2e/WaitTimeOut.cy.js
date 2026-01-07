/// <reference types = "cypress"/>

describe('Testes Ultilizando Wait e Timeout',()=>{

    it('Ultilizando o Wait',()=>{

        cy.visit('https://www.google.com.br')

        cy.get('#APjFqb')
            .should('be.visible').click().type('Automação de teste').wait(4000)

        cy.get('.FPdoLc > center > .gNO89b', {timeout:1500})
            .should('be.visible').click({force:true})

            
    })
})