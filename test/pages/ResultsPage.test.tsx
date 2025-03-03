import { describe, it, expect, vi } from "vitest"
import { screen } from "@testing-library/react"
import { ResultsPage } from "@/pages/ResultsPage/ResultsPage"
import { renderWithCommonProviders } from "#/custom-render/renderWithCommonProviders"
import * as useSearchInputModule from "@/hooks/useSearchInput"
import * as useSearchResultsModule from "@/hooks/useSearchResults"
import * as routerModule from "react-router-dom"
import { createUrlFromText } from "@/utils/stringUtils"

vi.mock("@/hooks/useSearchInput", () => ({
  useSearchInput: vi.fn(),
}))

vi.mock("@/hooks/useSearchResults", () => ({
  useSearchResults: vi.fn(),
}))

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom")
  return {
    ...actual,
    useParams: vi.fn(),
  }
})

describe("ResultsPage", () => {
  const mockSearchInput = {
    searchText: "test",
    handleClear: vi.fn(),
    handleChange: vi.fn(),
    handleSubmit: vi.fn(),
  }

  const mockSearchResults = {
    results: [
      {
        id: 1,
        type: "dog",
        url: "https://example.com/dog",
        title: "Friendly Dog",
        description: "A friendly dog",
        image: "dog.jpg",
      },
    ],
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

  it("should render search results with correct formatting", () => {
    renderWithCommonProviders(<ResultsPage />)

    const title = mockSearchResults.results[0].title
    const url = createUrlFromText(title)

    expect(screen.getByText(url)).toBeInTheDocument()
    expect(screen.getByText(title)).toBeInTheDocument()
    expect(
      screen.getByText(mockSearchResults.results[0].description),
    ).toBeInTheDocument()

    const titleLink = screen.getByRole("link", { name: title })
    expect(titleLink).toHaveAttribute("href", mockSearchResults.results[0].url)
    expect(titleLink).toHaveAttribute("target", "_blank")
    expect(titleLink).toHaveAttribute("rel", "noopener noreferrer")
  })

  it("should handle empty search text in URL params", () => {
    vi.mocked(routerModule.useParams).mockReturnValue({ searchText: undefined })

    renderWithCommonProviders(<ResultsPage />)

    expect(useSearchInputModule.useSearchInput).toHaveBeenCalledWith("")
    expect(useSearchResultsModule.useSearchResults).toHaveBeenCalledWith("")
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
