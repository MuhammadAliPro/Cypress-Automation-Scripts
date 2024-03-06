
describe('My First Test', () => {

    it('Veify title-Positive test', () => {
        cy.visit("https://web-stage.farmghar.com/");
        cy.title().should('eq', 'farmGhar');
    })

    it('Veify title-Nagative test ', () => {
        cy.visit("https://web-stage.farmghar.com/");
        cy.title().should('eq', 'farmghar123');
    })

    
    
  })