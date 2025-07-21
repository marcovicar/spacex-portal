describe('Launches Page', () => {
  it('should display the Launches list and navigate to details', () => {
    cy.visit('/launches');

    cy.contains('Launches').should('be.visible');
    cy.get('[data-testid="launch-card"]').should('have.length.greaterThan', 0);

    cy.get('[data-testid="launch-card"]').first().click();

    cy.url().should('include', '/launches/')
    cy.get('h1').should('exist').and('not.be.empty');
  });
});
