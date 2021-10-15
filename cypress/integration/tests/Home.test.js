/// <reference types="cypress" />

describe('Home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Show Time Trekr'),
    () => {
      cy.contains('Time Trekr');
    };
});
