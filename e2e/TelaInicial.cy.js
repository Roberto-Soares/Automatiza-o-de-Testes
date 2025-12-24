/// <reference types = "cypress"/>

// import{faker}from'@faker-js/faker';
// const randomName = faker.name.fullName();
// const randomNum = faker.phone.number('+55 9#### ####')

// const inicial = require('../support/elements').ELEMENTS

import ClassTelaInicial from '../support/DesenvTelaInicial'


describe("Testando a tela inical", () => {
    beforeEach(function () {
        cy.visit('/')
    })
    context.only('Validação de Elementos na Pagina Inicial', () => {

        it('Validação de Elementos', ()=>{
            ClassTelaInicial.ValidaBtn();
            ClassTelaInicial.ValidaCampos();
            ClassTelaInicial.ValidaH1();
            ClassTelaInicial.ValidaTabela();
            ClassTelaInicial.ValidarChack();
        })

        // it('Validar Titulo', () => {
        //     // cy.ValidaH1() //CustoCommands
        //     // cy.get('h1')
        //     //     .contains('Curso Automação de Testes Bàsico').should('have.text', 'Curso Automação de Testes Bàsico')

        //     ClassTelaInicial.ValidaH1(); /* Object Page */

        // })
        // it('Validar os botões na tela', () => {

        //     ClassTelaInicial.ValidaBtn();
        // })
        // it('Validar Campos', () => {
        //     ClassTelaInicial.ValidaCampos();
        // })
        // it('Validar o chackbox', () => {
        //     ClassTelaInicial.ValidarChack();

        // })
        // it('Validar Tabela', () => {
        //     ClassTelaInicial.ValidaTabela();
        // })
    })

    context('Cadastrando Usuário', () => {
        it('Cadastrando um novo Usuário', () => {

            cy.CadastraUser()
            // cy.get(inicial.CampoNome).type(randomName)

            // cy.get(inicial.CampoTelefone).type(randomNum)

            // cy.get('input[type="date"]').clear().type('1995-03-10')

            // cy.get('input[id="rdoMasculino"]').check

            // cy.get('input[id="btnCadastrarSalvar"]').click()

            // cy.get('button').contains('Excluir').should('be.visible')

            // cy.get('button').contains('Alterar').should('be.visible')
            // // Excluir cadastro
            // cy.get('button').wait(2000).contains('Excluir').click()

            // //Cadatras um Novo usuário Para Testar o Btn Alterar
            // cy.get('input[id="txtNome"]').type('Roberto Soares')

            // cy.get('input[id="numero"]').type('55999999')

            // cy.get('input[type="date"]').clear().type('1995-03-10')

            // cy.get('input[id="rdoMasculino"]').check

            // cy.get('input[id="btnCadastrarSalvar"]').click()

            // cy.get('button').contains('Alterar').should('be.visible').click()

            // cy.get('input[id="numero"]').clear()

            // cy.get('input[id="btnCadastrarSalvar"]').click()

        })
    })

    context('Validar Dados na tabela', () => {
        it('Validar Tabela', () => {
            cy.get('input[id="txtNome"]').type('Roberto Soares')

            cy.get('input[id="numero"]').type('55999999')

            cy.get('input[type="date"]').clear().type('1995-03-10')

            cy.get('input[id="rdoMasculino"]').check

            cy.get('input[id="btnCadastrarSalvar"]').click()

            cy.get('tbody[id="tbodyResultados"]').find('tr').find('td').eq(0).invoke('text').then((PegaId => {
                cy.wrap(PegaId).as('Id da Tabela')
                cy.get('tbody[id="tbodyResultados"]').find('tr').find('td').eq(0).should('have.text', PegaId)
            }))
            cy.get('tbody[id="tbodyResultados"]').find('tr').find('td').eq(1).should('have.text', 'Roberto Soares')
            cy.get('tbody[id="tbodyResultados"]').find('tr').find('td').eq(2).should('have.text', '55999999')
            cy.get('tbody[id="tbodyResultados"]').find('tr').find('td').eq(3).should('have.text', '10/03/1995')
            cy.get('tbody[id="tbodyResultados"]').find('tr').find('td').eq(4).should('have.text', 'M')


        })
    })

})