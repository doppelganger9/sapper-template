// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />
/// <reference types="../support" />

describe('Sapper template app', () => {

	describe('happy path', () => {
		
		beforeEach(() => {
			cy.visit('/');
		});
	
		it('has a main heading', () => {
			cy.getByDataCy('main-heading')
			  .contains('Great success!');
		});
	
		it('navigates to /about', () => {
			cy.get('nav a').contains('about').click();
			cy.url().should('include', '/about');
			cy.getByDataCy('about-heading').contains('About');
		});
	
		it('navigates to /blog', () => {
			cy.get('nav a').contains('blog').click();
			cy.url().should('include', '/blog');
		});

		it('navigates to the second blog article', () => {
			cy.get('nav a').contains('blog').click();
			cy.url().should('include', '/blog');
			cy.getByDataCy('link-blog-2').click();
			cy.url().should('include', '/blog/why-the-name');
			cy.getByDataCy('post-heading').contains('Why the name?');
		});

		it('navigates to a blog article without title', () => {
			cy.get('nav a').contains('blog').click();
			cy.url().should('include', '/blog');
			cy.getByDataCy('link-blog-5').click();
			cy.getByDataCy('post-heading').contains('undefined');
		});

	});

	describe('edge cases', () => {

		it('handles 404', () => {
			cy.visit('/sdgsdg', { failOnStatusCode: false });
			cy.getByDataCy('error-status').contains('404');
			cy.getByDataCy('error-message').contains('Not found');
		});	

	});
	
});