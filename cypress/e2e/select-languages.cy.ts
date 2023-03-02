describe("Change from english to french", () => {
  it("passes", () => {
    cy.visit('http://localhost:6677/');
    cy.get('#cy-select-language').select("fr");
    cy.get('#cy-home-link').click().contains("Accueil");
  })
})

export {}
