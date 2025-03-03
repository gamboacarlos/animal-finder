import { renderHook, waitFor } from "@testing-library/react"
import { useSearchResults } from "@/hooks/useSearchResults"
import { getAnimalsList } from "@/api/services/getAnimalsList"
import { vi, describe, it, expect } from "vitest"
import { MOCKED_ANIMALS_DATA } from "#/mocks/data/mockedAnimalsData"

vi.mock("@/api/services/getAnimalsList", () => ({
  getAnimalsList: vi.fn(),
}))

describe("useSearchResults", () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it("should start with loading state", () => {
    const { result } = renderHook(() => useSearchResults(""))
    expect(result.current.isLoading).toBe(true)
    expect(result.current.results).toEqual([])
    expect(result.current.error).toBeNull()
  })

  it("should fetch and filter data successfully", async () => {
    vi.mocked(getAnimalsList).mockResolvedValue(MOCKED_ANIMALS_DATA)

    const { result } = renderHook(() => useSearchResults("fish"))

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
    })

    expect(result.current.results).toHaveLength(1)
    expect(result.current.results[0].type).toBe("fish")
    expect(result.current.error).toBeNull()
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

  it("should cleanup on unmount", async () => {
    vi.mocked(getAnimalsList).mockImplementation(
      () =>
        new Promise((resolve) => {
          setTimeout(() => resolve(MOCKED_ANIMALS_DATA), 10000)
        }),
    )

    const { unmount, result } = renderHook(() => useSearchResults(""))
    unmount()

    await waitFor(
      () => {
        expect(result.current.isLoading).toBe(true)
        expect(result.current.results).toEqual([])
        expect(result.current.error).toBeNull()
      },
      { timeout: 100 },
    )
  })
})
