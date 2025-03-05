import { renderHook, waitFor } from "@testing-library/react"
import { useSearchResults } from "@/hooks/useSearchResults"
import { getAnimalsList } from "@/api/services/getAnimalsList"
import { vi, describe, it, expect, beforeEach } from "vitest"
import { MOCKED_ANIMALS_DATA } from "#/mocks/data/mockedAnimalsData"

vi.mock("@/api/services/getAnimalsList", () => ({
  getAnimalsList: vi.fn(),
}))

describe("useSearchResults", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("should handle empty search text", async () => {
    const { result } = renderHook(() => useSearchResults(""))

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
    })

    expect(result.current.results).toEqual([])
    expect(getAnimalsList).not.toHaveBeenCalled()
  })

  it("should start with loading state when search text is provided", () => {
    const { result } = renderHook(() => useSearchResults("cat"))
    expect(result.current.isLoading).toBe(true)
    expect(result.current.results).toEqual([])
  })

  it("should fetch and filter data successfully", async () => {
    vi.mocked(getAnimalsList).mockResolvedValue(MOCKED_ANIMALS_DATA)

    const { result } = renderHook(() => useSearchResults("fish"))

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
    })

    expect(result.current.results).toHaveLength(1)
    expect(result.current.results[0].type).toBe("fish")
  })

  it("should filter by both type and description", async () => {
    vi.mocked(getAnimalsList).mockResolvedValue(MOCKED_ANIMALS_DATA)

    const { result } = renderHook(() => useSearchResults("Architecto"))

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
    })

    expect(result.current.results).toHaveLength(1)
    expect(result.current.results[0].type).toBe("turtle")
  })

  it("should handle case-insensitive search", async () => {
    vi.mocked(getAnimalsList).mockResolvedValue(MOCKED_ANIMALS_DATA)

    const { result } = renderHook(() => useSearchResults("FISH"))

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
    })

    expect(result.current.results).toHaveLength(1)
    expect(result.current.results[0].type).toBe("fish")
  })
})
