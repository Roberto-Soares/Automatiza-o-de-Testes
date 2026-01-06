
/// <reference types="cypress" />

/**
 * Cenário: Validar elementos visíveis na página inicial (Home)
 * Site: https://practice.automationtesting.in
 *
 * O que validamos:
 * - Hero/slider visível.
 * - Cards/lista de produtos (imagem, título, preço).
 * - Links de compra (Add to cart) visíveis.
 *
 * Dicas:
 * - Usamos seletores estáveis quando possível (#id, tag + classe).
 * - Evitamos seletores excessivamente frágeis (ex.: encadeamentos muito longos),
 *   mas mantemos o que funciona para esta página de demonstração.
 */

describe('Encontrar elementos', () => {
  // Executa antes de cada teste: acessa a página inicial
  beforeEach(() => {
    // Com baseUrl configurado, '/' abre https://practice.automationtesting.in/
    cy.visit('/', { waitUntil: 'domcontentloaded', timeout: 120000 });
  });

  it('Acessando a página e validando elementos principais', () => {
    // --- Slider / Hero visível (há variações de classes; usamos um seletor menos frágil) ---
    cy.get('.n2-ss-slide-background, .n2-ss-slide-active, .n2-ss-slide, .n2-ss-background')
      .first()
      .should('be.visible');

    // --- Lista/grade de produtos principal ---
    cy.get('.products .product').should('have.length.greaterThan', 0);

    // ===== Produto 1: "Selenium Ruby" =====
    // Imagem do produto
    cy.get('.products .product')
      .contains('h3', 'Selenium Ruby')
      .should('be.visible')
      .parents('.product')
      .find('img')
      .should('be.visible');

    // Preço e link "Add to cart" do produto
    cy.get('.products .product')
      .contains('h3', 'Selenium Ruby')
      .parents('.product')
      .within(() => {
        cy.get('span.amount').should('contain.text', '500.00');          // preço exibido
        cy.get('a.button, a[href*="add-to-cart"]').should('be.visible'); // CTA de compra
      });

    // ===== Produto 2: "Thinking in HTML" =====
    cy.get('.products .product')
      .contains('h3', 'Thinking in HTML')
      .should('be.visible')
      .parents('.product')
      .within(() => {
        cy.get('img').should('be.visible');
        cy.get('span.amount').should('contain.text', '400.00');
      });

    // ===== Produto 3: "Mastering JavaScript" =====
    cy.get('.products .product')
      .contains('h3', 'Mastering JavaScript')
      .should('be.visible')
      .parents('.product')
      .within(() => {
        cy.get('img').should('be.visible');
        cy.get('span.amount').should('contain.text', '350.00');
      });

    // Sanidade geral: pelo menos 3 produtos visíveis
    cy.get('.products .product:visible').should('have.length.at.least', 3);
  });
});


// /// <reference types="cypress"/>

// describe('Encontrar elementos', () => {
//   beforeEach(() => {
//     cy.visit('https://practice.automationtesting.in/') // Acesso a pagina
//   })

//   it('Acessando pagina', () => {

//     //A seguir encontrar elementos na pagina inicial

//     cy.get('.n2-ss-slide-active > .n2-ss-slide-background > .n2-ss-slide-background-image').should('be.visible')

//     // 1 iten encontrado
//     cy.get('.post-160 > .woocommerce-LoopProduct-link > .attachment-shop_catalog').should('be.visible') // Imagem do produto

//     cy.get('h3').contains('Selenium Ruby').should('be.visible') //validação de texto
//     cy.get('span[class="woocommerce-Price-amount amount"]').contains('500.00') //Validação do valor do iten
//     cy.get('a[href="/?add-to-cart=160"]').should('be.visible')

//     // 2 ietn encontrado
//     cy.get('img[src="https://practice.automationtesting.in/wp-content/uploads/2017/01/Thinking-in-HTML-300x300.jpg"]').should('be.visible')

//     cy.get('h3').contains('Thinking in HTML').should('be.visible')
//     cy.get('span[class="woocommerce-Price-amount amount"]').contains('400.00')

//     // //3 iten encontrado
//     cy.get('img[src="https://practice.automationtesting.in/wp-content/uploads/2017/01/Mastering-JavaScript-300x300.jpg"]').should('be.visible')

//     cy.get('h3').contains('Mastering JavaScript').should('be.visible')
//     cy.get('span[class="woocommerce-Price-amount amount"]').contains('350.00')

//   })
// })