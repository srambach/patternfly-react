describe('Page Demo Test', () => {
  it('Navigate to page section', () => {
    cy.visit('http://localhost:3000/page-demo-nav-link');
  });

  it('Test Page elements', () => {
    cy.get('#page-demo').within(() => {
      cy.get('#nav-toggle').then((hamburgerIcon: JQuery<HTMLDivElement>) => {
        cy.get('.pf-c-page__sidebar.pf-m-expanded').should('exist');
        cy.get('.pf-c-page__sidebar.pf-m-collapsed').should('not.exist');
        cy.wrap(hamburgerIcon).click();
        cy.get('.pf-c-page__sidebar.pf-m-collapsed').should('exist');
        cy.get('.pf-c-page__sidebar.pf-m-expanded').should('not.exist');
      });
      cy.get('#page-demo-header').should('not.have.attr', 'role');
      cy.get('#page-demo-page-id').should('not.have.attr', 'role');
      cy.get('div[class="pf-c-page__header-brand-link"]')
        .invoke('text')
        .should('eq', "Logo that's a <div>");
      cy.get('.pf-c-page__main-section.pf-m-dark-100').should('exist');
      cy.get('.pf-c-page__main-section.pf-m-dark-200').should('exist');
      cy.get('.pf-c-page__main-section.pf-m-light').should('exist');
      cy.get('.pf-c-page__main-section.pf-m-no-padding').should('exist');
      cy.get('.pf-c-page__main-section.pf-m-no-padding-on-md').should('exist');
    });
  });
});
