import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { ResultsMessage } from "@/components/ResultsMessage/ResultsMessage"

describe("ResultsMessage", () => {
  it("should render without search text", () => {
    render(<ResultsMessage searchText={undefined} />)

    expect(screen.queryByText(/No results found for/)).not.toBeInTheDocument()
    expect(screen.getByText(/Try looking for:/)).toBeInTheDocument()
  })

  it("should render with search text", () => {
    const searchText = "tiger"
    render(<ResultsMessage searchText={searchText} />)

    expect(screen.getByText(/No results found for/)).toBeInTheDocument()
    expect(screen.getByText(`"${searchText}"`)).toBeInTheDocument()
  })

  it("should have the correct data-testid", () => {
    render(<ResultsMessage searchText={undefined} />)

    expect(screen.getByTestId("results-message")).toBeInTheDocument()
  })
})
