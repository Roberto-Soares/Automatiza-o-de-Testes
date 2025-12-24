/// <reference types="cypress"/>

describe('Encontrar HTML de agina',()=>{
    it('Acessar Site Demostração', ()=>{

        cy.visit('https://www.google.com/')

        //cy.get('#APjFqb') primeira forma 

        cy.get('textarea[class="gLFyf"]')

        //cy.get('.FPdoLc > center > .gNO89b') primeira forma

        cy.get('input[class="gNO89b"]')
    })
})