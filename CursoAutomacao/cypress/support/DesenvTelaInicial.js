import{faker}from'@faker-js/faker';
import'cypress-real-events';
const randomName = faker.name.fullName();
const randomNum = faker.phone.number('+55 9#### ####')

const inicial = require('../support/elements').ELEMENTS

class ClassTelaInicial {

    ValidaH1() {
        cy.get('h1')
            .contains('Curso Automação de Testes Bàsico').should('have.text', 'Curso Automação de Testes Bàsico')
    }
    ValidaBtn() {
        cy.get('a[href="./login.html"]').as('btnVoltar')
            .should('be.visible')
        cy.log('botão voltar visivel')
        // cy.pause() comando pausar

        cy.get('a[href="texto.html"]').as('btnTexto')
            .should('be.visible')
        cy.log('Botão texto visivel')


        cy.get('a[href="imagem.html"]').as('btnImagem')
            .should('be.visible')
        cy.log('Botão Immagem')

        cy.get('input[id="btnCadastrarSalvar"]')
            .should('be.visible').should('have.value', 'Cadastrar')

    }
    ValidaCampos() {
        cy.get('input[id="txtNome"]')
            .should('be.visible')

        // cy.get('input[id="numero"]')
        //     .should('be.visible')

        // cy.get('input[id="dtpDataNascimento"]')
        //     .should('be.visible')
    }
    ValidarChack() {
        cy.get('input[id="rdoMasculino"]')
            .should('have.value', 'male')

        cy.get('input[id="rdoFeminino"]')
            .should('have.value', 'female')

    }
    ValidaTabela() {
        cy.get('h2').contains('Tabela').should('have.text', 'Tabela')

        cy.get('tr').find('th').eq(0)
            .should('have.text', 'Id')

        cy.get('tr').find('th').eq(1)
            .should('have.text', 'Nome')

        cy.get('tr').find('th').eq(2)
            .should('have.text', 'Telefone')

        cy.get('tr').find('th').eq(3)
            .should('have.text', 'Nascimento')

        cy.get('tr').find('th').eq(4)
            .should('have.text', 'Sexo')

        cy.get('tr').find('th').eq(5)
            .should('have.text', 'Ultima Atualização')
    }
}

export default new ClassTelaInicial();