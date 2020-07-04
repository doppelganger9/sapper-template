declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * get an element targetting its `data-cy` attribute, as recommended by Cypress best practices.
     * 
     * @example
     * cy.getByDataCy('main-heading')
     * 
     * @see 
     * https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements
     */
    getByDataCy(): Chainable<any>;
  }
}
