describe('Teste de API', () => {

    it('Teste de API', () => {

        cy.request({
            method: 'GET',
            faliOnStatusCode: false,
            url: 'https://www.terra.com.br/',
            headers:
            {
                Authorization: 'p1.trrsf.com',
                'content-type': 'application/json;charset-UTF-8',
            },

        }).then((teste) => {
            cy.log(JSON.stringity(teste.body[0]))
            
        
        })

    })
})