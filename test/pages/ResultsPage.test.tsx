import { describe, it, expect, vi } from "vitest"
import { screen } from "@testing-library/react"
import { ResultsPage } from "@/pages/ResultsPage/ResultsPage"
import { renderWithCommonProviders } from "#/custom-render/renderWithCommonProviders"
import * as useSearchInputModule from "@/hooks/useSearchInput"
import * as useSearchResultsModule from "@/hooks/useSearchResults"
import * as routerModule from "react-router-dom"
import { MOCKED_ANIMALS_DATA } from "#/mocks/data/mockedAnimalsData"

vi.mock("@/hooks/useSearchInput", () => ({
  useSearchInput: vi.fn(),
}))

vi.mock("@/hooks/useSearchResults", () => ({
  useSearchResults: vi.fn(),
}))

describe("ResultsPage", () => {
  const mockSearchInput = {
    searchText: "test",
    handleClear: vi.fn(),
    handleChange: vi.fn(),
    handleSubmit: vi.fn(),
  }

  const mockSearchResults = {
    results: MOCKED_ANIMALS_DATA,
    isLoading: false,
    error: null,
  }

  beforeEach(() => {
    vi.mocked(useSearchInputModule.useSearchInput).mockReturnValue(
      mockSearchInput,
    )
    vi.mocked(useSearchResultsModule.useSearchResults).mockReturnValue(
      mockSearchResults,
    )
    vi.mocked(routerModule.useParams).mockReturnValue({ searchText: "test" })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it("should render with search text from URL params", () => {
    renderWithCommonProviders(<ResultsPage />)

    expect(useSearchInputModule.useSearchInput).toHaveBeenCalledWith("test")
    expect(useSearchResultsModule.useSearchResults).toHaveBeenCalledWith("test")
    expect(screen.getByAltText("Google")).toBeInTheDocument()
  })

  it("should handle empty search text in URL params", () => {
    vi.mocked(routerModule.useParams).mockReturnValue({ searchText: undefined })

    renderWithCommonProviders(<ResultsPage />)

    expect(useSearchInputModule.useSearchInput).toHaveBeenCalledWith(undefined)
    expect(useSearchResultsModule.useSearchResults).toHaveBeenCalledWith(
      undefined,
    )
  })

  it("should render loading state", () => {
    vi.mocked(useSearchResultsModule.useSearchResults).mockReturnValue({
      ...mockSearchResults,
      isLoading: true,
      results: [],
    })

    renderWithCommonProviders(<ResultsPage />)

    expect(screen.queryByText("A friendly dog")).not.toBeInTheDocument()
  })
})
