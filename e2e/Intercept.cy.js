describe('Teste com Intercept',()=>{
    it('Testando com Intercept',()=>{
        cy.visit('www.google.com.br')

        cy.intercept('POST', '/log?format=json&hasfast=true&authuser=0').as('IconeCamera')
        cy.get('div[class="nDcEnd"]').click().wait('@IconeCamera')
    })

})