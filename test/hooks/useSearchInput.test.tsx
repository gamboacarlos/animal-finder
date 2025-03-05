import { describe, it, expect, vi } from "vitest"
import { renderHook } from "@testing-library/react"
import { useSearchInput } from "../../src/hooks/useSearchInput"
import { useNavigate } from "react-router-dom"

vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn(),
}))

describe("useSearchInput hook", () => {
  const mockNavigate = vi.fn()
  beforeEach(() => {
    vi.mocked(useNavigate).mockReturnValue(mockNavigate)
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it("should initialize with empty search text by default", () => {
    const { result } = renderHook(() => useSearchInput())
    expect(result.current.searchText).toBe("")
  })

  it("should initialize with provided initial value", () => {
    const { result } = renderHook(() => useSearchInput("initial"))
    expect(result.current.searchText).toBe("initial")
  })

  it("should navigate to results page with search text", () => {
    const { result } = renderHook(() => useSearchInput("search term"))
    const mockEvent = {
      preventDefault: vi.fn(),
    } as unknown as React.FormEvent<HTMLFormElement>

    result.current.handleSubmit(mockEvent)
    expect(mockNavigate).toHaveBeenCalledWith("/results/search term")
  })

  it("should navigate to results page without search text", () => {
    const { result } = renderHook(() => useSearchInput())
    const mockEvent = {
      preventDefault: vi.fn(),
    } as unknown as React.FormEvent<HTMLFormElement>

    result.current.handleSubmit(mockEvent)
    expect(mockNavigate).toHaveBeenCalledWith("/results")
  })
})
