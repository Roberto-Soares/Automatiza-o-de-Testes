const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 1000,
  viewportHeight: 900,

  // Aumenta o tempo máximo para carregamento de página (útil para sites externos)
  pageLoadTimeout: 120000, // 120s

  e2e: {
    // Base da URL para que possamos usar rotas relativas em cy.visit()
    baseUrl: 'https://practice.automationtesting.in',

    // Você pode adicionar intercepts globais ou tasks aqui se necessário.
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

