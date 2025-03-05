import { describe, expect, it, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ResultItem } from "@/components/ResultItem/ResultItem"
import type { ResultItemProps } from "@/components/ResultItem/types"
import { MAX_RESULT_DESCRIPTION_LENGTH } from "@/constants/uiConstants"
import { MOCKED_ANIMALS_DATA } from "#/mocks/data/mockedAnimalsData"

describe("ResultItem", () => {
  const mockSetSelectedItem = vi.fn()

  const defaultProps: ResultItemProps = {
    item: MOCKED_ANIMALS_DATA[0],
    setSelectedItem: mockSetSelectedItem,
  }

  it("renders the component with correct content", () => {
    render(<ResultItem {...defaultProps} />)

    expect(screen.getByText("Violet-green Swallow")).toBeInTheDocument()
    expect(screen.getByText(MOCKED_ANIMALS_DATA[0].title)).toBeInTheDocument()
    expect(
      screen.getByText(MOCKED_ANIMALS_DATA[0].description),
    ).toBeInTheDocument()
  })

  it("calls setSelectedItem when clicking the title button", async () => {
    render(<ResultItem {...defaultProps} />)
    const user = userEvent.setup()

    const titleButton = screen.getByRole("button")
    await user.click(titleButton)

    expect(mockSetSelectedItem).toHaveBeenCalledWith(MOCKED_ANIMALS_DATA[0])
    expect(mockSetSelectedItem).toHaveBeenCalledTimes(1)
  })

  it("truncates long descriptions with ellipsis", () => {
    const longDescription = "a".repeat(MAX_RESULT_DESCRIPTION_LENGTH + 10)
    const itemWithLongDescription = {
      ...MOCKED_ANIMALS_DATA[0],
      description: longDescription,
    }

    render(
      <ResultItem
        item={itemWithLongDescription}
        setSelectedItem={mockSetSelectedItem}
      />,
    )

    const expectedTruncatedText = `${"a".repeat(MAX_RESULT_DESCRIPTION_LENGTH)}...`
    expect(screen.getByText(expectedTruncatedText)).toBeInTheDocument()
  })
})
