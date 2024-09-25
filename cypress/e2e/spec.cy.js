describe("Counter Component", () => {
  it("should display the initial value", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="counter"]').contains("Value: 0");
  });

  it('should increment the value when "+" button is clicked', () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="counter"]').contains("Value: 0");
    cy.get("button").contains("+").click();
    cy.get('[data-testid="counter"]').contains("Value: 1");
  });

  it('should increment the value when "+" button is clicked several times', () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="counter"]').contains("Value: 0");
    cy.get("button").contains("+").click();
    cy.get("button").contains("+").click();
    cy.get("button").contains("+").click();
    cy.get('[data-testid="counter"]').contains("Value: 3");
  });

  it('should decrement the value when "-" button is clicked', () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="counter"]').contains("Value: 0");
    cy.get("button").contains("-").click();
    cy.get('[data-testid="counter"]').contains("Value: -1");
  });
  it('should decrement the value when "-" button is clicked  several times', () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="counter"]').contains("Value: 0");
    cy.get("button").contains("-").click();
    cy.get("button").contains("-").click();
    cy.get("button").contains("-").click();
    cy.get('[data-testid="counter"]').contains("Value: -3");
  });
});
