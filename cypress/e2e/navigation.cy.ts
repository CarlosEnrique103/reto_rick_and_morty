describe('My First Test', () => {
  it('should show logo', () => {
    cy.visit('/')
    cy.get('.logo').should('be.visible')
  })
  it('should show nav', () => {
    cy.visit('/')
    cy.get('nav').within(() => {
      cy.contains('Characters').should('be.visible').should('have.attr', 'href', '/')
    })
    cy.get('nav .bg-custom-tertiary').should('exist')
  })
})
