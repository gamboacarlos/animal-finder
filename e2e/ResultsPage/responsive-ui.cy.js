describe("Responsive Tests", () => {
  const tablet = { width: 810, height: 1080 }
  const mobile = { width: 500, height: 960 }

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
    cy.viewport(tablet.width, tablet.height)

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
    cy.viewport(mobile.width, mobile.height)

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
