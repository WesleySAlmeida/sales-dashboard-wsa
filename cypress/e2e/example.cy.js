describe('Teste inicial', () => {
  it('abre o site', () => {
    cy.visit('http://localhost:5173'); // ajuste para a porta do Vite
    cy.contains('Dashboard');
  });
});
