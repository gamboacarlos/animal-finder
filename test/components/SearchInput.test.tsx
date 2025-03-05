import { render } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { SearchInput } from "@/components/SearchInput/SearchInput"

const mockSearchText = "test"
const mockHandleClear = vi.fn()
const mockHandleChange = vi.fn()
const mockHandleSubmit = vi.fn()

describe("SearchInput", () => {
  it("should render without errors", () => {
    const { getByTestId } = render(
      <SearchInput
        searchText={mockSearchText}
        handleClear={mockHandleClear}
        handleChange={mockHandleChange}
        handleSubmit={mockHandleSubmit}
      />,
    )

    expect(getByTestId("search-input")).toBeInTheDocument()
  })
})
