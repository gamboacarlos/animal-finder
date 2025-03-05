import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { ResultsList } from "@/components/ResultsList/ResultsList"
import type { SearchResultsProps } from "@/components/ResultsList/types"
import { MOCKED_ANIMALS_DATA } from "#/mocks/data/mockedAnimalsData"

describe("ResultsList", () => {
  const defaultProps: SearchResultsProps = {
    results: MOCKED_ANIMALS_DATA,
    isLoading: false,
    searchText: "test",
  }

  it("renders loading skeletons when isLoading is true", () => {
    render(<ResultsList {...defaultProps} isLoading={true} />)
    const skeletons = screen.getAllByTestId("result-item-skeleton")
    expect(skeletons).toHaveLength(8)
  })

  it("renders results message when no results and not loading", () => {
    render(<ResultsList {...defaultProps} results={[]} />)

    expect(screen.getByTestId("results-message")).toBeInTheDocument()
  })

  it("renders results list when results are available", () => {
    render(<ResultsList {...defaultProps} />)

    MOCKED_ANIMALS_DATA.forEach((result) => {
      expect(screen.getByText(result.title)).toBeInTheDocument()
    })
  })
})
