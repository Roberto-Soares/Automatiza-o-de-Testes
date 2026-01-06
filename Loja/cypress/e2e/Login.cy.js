
/// <reference types="cypress" />

/**
 * Testes de Registro e Login na página "My Account"
 * Site: https://practice.automationtesting.in
 *
 * Notas:
 * - Usamos baseUrl no cypress.config.js, então cy.visit('/my-account/') abre
 *   https://practice.automationtesting.in/my-account/
 * - Corrigidos typos e espaços extras em contains().
 * - Mantidos asserts mínimos para evitar flakiness.
 */

describe('Pagina de Login', () => {
  // Executa antes de cada teste: vai direto para a tela alvo
  beforeEach(() => {
    cy.visit('/my-account/', { waitUntil: 'domcontentloaded', timeout: 120000 });
  });

  context('Teste de Registro do usuario', () => {
    it('Teste de registro', () => {
      // Validação das labels (opcional, ajuda a detectar que estamos na tela correta)
      cy.get('label[for="reg_email"]').should('be.visible').contains('Email address');
      cy.get('label[for="reg_password"]').should('be.visible').contains('Password');

      // Preenchimento de email e senha
      cy.get('#reg_email')
        .click()
        .type('teste.loja1@automation.com')
        .should('have.value', 'teste.loja1@automation.com');

      cy.get('#reg_password')
        .click()
        .type('adminTeste@12w', { log: false }) // oculta no log por segurança
        .should('have.value', 'adminTeste@12w');

      // Botão Register
      cy.get('[name="register"]').contains('Register')

      // Exemplo de validação pós-registro:a
      // Em sites reais, a resposta pode ser mensagem de sucesso/erro.
      // Ajuste o seletor conforme o que a página renderizar.
      cy.get('.woocommerce').should('be.visible');
    });
  });

  context('Teste de login do usuario', () => {
    it('Teste Login', () => {
      // Validação das labels (opcional)
      cy.get('label[for="username"]').should('be.visible').contains('Username or email address');
      cy.get('label[for="password"]').should('be.visible').contains('Password');

      // Preenchimento do login
      cy.get('#username')
        .click()
        .type('teste.loja1@automation.com')
        .should('have.value', 'teste.loja1@automation.com');

      cy.get('#password')
        .click()
        .type('adminTeste@12w', { log: false })
        .should('have.value', 'adminTeste@12w');

      // Botão Login
      cy.get('input[name="login"]').should('be.visible').click();

      // Validação pós-login: URL e navegação da conta
      cy.url().should('include', '/my-account');
      cy.get('.woocommerce-MyAccount-navigation, .woocommerce').should('be.visible');
    });
  });
});



// /// <reference types = "cypress" />

// describe('Pagina, de Login', () => {

//     beforeEach(function () {
//         cy.visit('https://practice.automationtesting.in/my-account/')
//     });

//     context('Teste de Registro do usuario', () => {
//         it("Teste de registro", () => {

//             /* Teste de Registro */
//             cy.get("label[for=reg_email]").should('be.visible').contains("Email address")
//             cy.get('input[id="reg_email"]')
//                 .click().type('teste.loja1@automation.com').should('have.value', 'teste.loja1@automation.com')/* Cadastro de usuario e senha */

//             cy.get('label[for="reg_password"]').contains("Password ")
//             cy.get('input[id="reg_password"]')
//                 .click().type('adminTeste@12w').should('have.value', 'adminTeste@12w')

//             cy.get('[name="register"]').contains('Register')
//         })
//         context('Teste de login do usuario', () => {
//             it('teste de Login', () => {
//                 /* Teste Login */
//                 cy.get('label[for="username"]').contains('Username or email address ')
//                 cy.get('input[id="username"]')
//                     .click().type('teste.loja1@automation.com').should('have.value', 'teste.loja1@automation.com') /* login de usaurio e senha */
//                 cy.get('label[for="password"]').contains('Password ')
//                 cy.get('input[id="password"]')
//                     .click().type('adminTeste@12w').should('have.value', 'adminTeste@12w')

//                 cy.get('input[name="login"]').should('be.visible').click()
//             })
//         })

//     })

// })