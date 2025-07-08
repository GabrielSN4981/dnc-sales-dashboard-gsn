describe("Check if create profile page renders the correct components", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/cadastro");
  });

  it("should steps 1 a 2 works", () => {
    cy.get("input[type='text']").type("Tester Cypress");
    cy.get("input[type='email']").type("teste@cypress.com");
    cy.get("input[type='tel']").type("123456789");
    cy.get("button[type='submit'").click();
    cy.get("input[type='password']").type("Cypress2005@");
    cy.get("button[type='submit'").should("be.visible");
  });
});
