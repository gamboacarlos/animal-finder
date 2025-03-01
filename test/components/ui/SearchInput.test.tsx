import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { SearchInput } from "@/components/ui/SearchInput"

describe("SearchInput", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<SearchInput />)

    expect(getByTestId("search-input")).toBeInTheDocument()
  })
})
