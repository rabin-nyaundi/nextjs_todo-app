/// <reference types="cypress" />


describe('example to-do app', () => {

  it('should navigate to posts page', () => {
    cy.visit('http://localhost:3000/')

    // Find a link with alink href attribute containing posts
    cy.get('a[href*="posts"]').click()

    // The url should include "/posts"
    cy.url().should('include', '/posts')

    // The page should contain an h1 with posts
    cy.get('h1').contains('Posts Page')
  })

})
