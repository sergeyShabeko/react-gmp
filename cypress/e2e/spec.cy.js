// describe("Counter Component", () => {
//   it("should display the initial value", () => {
//     cy.visit("http://localhost:3000/");
//     cy.get('[data-testid="counter"]').contains("Value: 0");
//   });

//   it('should increment the value when "+" button is clicked', () => {
//     cy.visit("http://localhost:3000/");
//     cy.get('[data-testid="counter"]').contains("Value: 0");
//     cy.get("button").contains("+").click();
//     cy.get('[data-testid="counter"]').contains("Value: 1");
//   });

//   it('should increment the value when "+" button is clicked several times', () => {
//     cy.visit("http://localhost:3000/");
//     cy.get('[data-testid="counter"]').contains("Value: 0");
//     cy.get("button").contains("+").click();
//     cy.get("button").contains("+").click();
//     cy.get("button").contains("+").click();
//     cy.get('[data-testid="counter"]').contains("Value: 3");
//   });

//   it('should decrement the value when "-" button is clicked', () => {
//     cy.visit("http://localhost:3000/");
//     cy.get('[data-testid="counter"]').contains("Value: 0");
//     cy.get("button").contains("-").click();
//     cy.get('[data-testid="counter"]').contains("Value: -1");
//   });
//   it('should decrement the value when "-" button is clicked  several times', () => {
//     cy.visit("http://localhost:3000/");
//     cy.get('[data-testid="counter"]').contains("Value: 0");
//     cy.get("button").contains("-").click();
//     cy.get("button").contains("-").click();
//     cy.get("button").contains("-").click();
//     cy.get('[data-testid="counter"]').contains("Value: -3");
//   });
// });

describe("MovieListPage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the default movie list", () => {
    cy.get(".movie-container").should("exist");
    cy.get(".movie-container .movie-tile").should("have.length.greaterThan", 0);
  });

  it("should update the URL when search query is entered", () => {
    cy.get('input[name="search"]').type("Inception{enter}");
    cy.url().should("include", "search=Inception");
    cy.get(".movie-container .movie-tile").should("have.length.greaterThan", 0);
  });

  it("should update the URL when genre is selected", () => {
    cy.get(".genre-select").select("COMEDY");
    cy.url().should("include", "genre=COMEDY");
    cy.get(".movie-container .movie-tile").should("have.length.greaterThan", 0);
  });

  it("should update the URL when sort criterion is changed", () => {
    cy.get(".sort-control").select("rating");
    cy.url().should("include", "sort=rating");
    cy.get(".movie-container .movie-tile").should("have.length.greaterThan", 0);
  });

  it("should retain search parameters after page reload", () => {
    cy.get('input[name="search"]').type("Inception{enter}");
    cy.get(".genre-select").select("COMEDY");
    cy.get(".sort-control").select("rating");
    cy.reload();
    cy.url().should("include", "search=Inception");
    cy.url().should("include", "genre=COMEDY");
    cy.url().should("include", "sort=rating");
    cy.get(".movie-container .movie-tile").should("have.length.greaterThan", 0);
  });
});

describe("MovieListPage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the default movie list", () => {
    cy.get(".movie-container").should("exist");
    cy.get(".movie-container .movie-tile").should("have.length.greaterThan", 0);
  });

  it("should update the URL when search query is entered", () => {
    cy.get('input[name="search"]').type("Inception{enter}");
    cy.url().should("include", "search=Inception");
    cy.get(".movie-container .movie-tile").should("have.length.greaterThan", 0);
  });

  it("should update the URL when genre is selected", () => {
    cy.get(".genre-select").select("COMEDY");
    cy.url().should("include", "genre=COMEDY");
    cy.get(".movie-container .movie-tile").should("have.length.greaterThan", 0);
  });

  it("should update the URL when sort criterion is changed", () => {
    cy.get(".sort-control").select("rating");
    cy.url().should("include", "sort=rating");
    cy.get(".movie-container .movie-tile").should("have.length.greaterThan", 0);
  });

  it("should retain search parameters after page reload", () => {
    cy.get('input[name="search"]').type("Inception{enter}");
    cy.get(".genre-select").select("COMEDY");
    cy.get(".sort-control").select("rating");
    cy.reload();
    cy.url().should("include", "search=Inception");
    cy.url().should("include", "genre=COMEDY");
    cy.url().should("include", "sort=rating");
    cy.get(".movie-container .movie-tile").should("have.length.greaterThan", 0);
  });

  it("should navigate to movie details and retain state", () => {
    cy.get(".movie-container .movie-tile").first().click();
    cy.url().should("include", "/");
    cy.get(".movie-details").should("exist");
    cy.reload();
    cy.get(".movie-details").should("exist");
  });
});
