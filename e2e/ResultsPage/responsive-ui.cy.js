describe("Responsive Tests", () => {
  const viewports = [
    { name: "mobile", width: 500, height: 960 },
    { name: "tablet", width: 810, height: 1080 },
    { name: "desktop", width: 1280, height: 720 },
  ]

  it("should search and display results properly on desktop", () => {
    cy.visit("/")

    cy.get('[data-testid="search-input"]').type("as")
    cy.wait(1000)
    cy.get('[data-testid="search-button"]').click()
    cy.wait(2000)
    cy.get('[data-testid="result-item-title"]').first().click()

    cy.get('[data-testid="card"]').should("exist")
    cy.wait(1000)
  })

  it("should search and display results properly on tablet", () => {
    cy.viewport(viewports[1].width, viewports[1].height)

    cy.visit("/")
    cy.get('[data-testid="search-input"]').type("as")
    cy.wait(1000)
    cy.get('[data-testid="search-button"]').click()
    cy.wait(2000)
    cy.get('[data-testid="result-item-title"]').first().click()

    cy.get('[data-testid="modal"]').should("exist")
    cy.get('[data-testid="card"]').should("exist")
    cy.wait(1000)
  })

  it("should search and display results properly on mobile", () => {
    cy.viewport(viewports[0].width, viewports[0].height)

    cy.visit("/")
    cy.get('[data-testid="search-input"]').type("as")
    cy.wait(1000)
    cy.get('[data-testid="search-button"]').click()
    cy.wait(2000)
    cy.get('[data-testid="result-item-title"]').first().click()

    cy.get('[data-testid="modal"]').should("exist")
    cy.get('[data-testid="card"]').should("exist")
    cy.wait(1000)
  })
})
