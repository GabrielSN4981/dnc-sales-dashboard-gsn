describe("Check if create profile page renders the correct components", () => {
  beforeEach(() => {
    cy.login("gabrieltestevalid1@gmail.com", "Gabriel2005@");
    cy.visit("http://localhost:5173/home");
  });

  it("should display total sales", () => {
    cy.get("#total-sales").should("be.visible");
  });

  it("should display month goals", () => {
    cy.get("#month-goals").should("be.visible");
  });

  it("should display contacted leads", () => {
    cy.get("#total-leads").should("be.visible");
  });

  it("should display month sales", () => {
    cy.get("#month-sales").should("be.visible");
  });

  it("should display sales stars", () => {
    cy.get("#sales-stars").should("be.visible");
  });

  it("should display month sales chart", () => {
    cy.get("#month-sales-chart").should("be.visible");
  });

  it("should display news", () => {
    cy.get("#news").should("be.visible");
  });
});
