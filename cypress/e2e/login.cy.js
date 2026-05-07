describe('Login Flow Correct Credentials', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('should login with the correct credentials', () => {
    cy.get('form').should('be.visible');
  });
});
