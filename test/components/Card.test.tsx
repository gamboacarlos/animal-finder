import { render, screen } from "@testing-library/react"
import { Card } from "@/components/Card/Card"
import { MAX_CARD_DESCRIPTION_LENGTH } from "@/constants/uiConstants"
import { MOCKED_ANIMALS_DATA } from "#/mocks/data/mockedAnimalsData"

describe("Card", () => {
  it("should not render when selectedItem is null", () => {
    render(<Card selectedItem={null} />)
    expect(screen.queryByRole("img")).not.toBeInTheDocument()
  })

  it("should render all card elements when selectedItem is provided", () => {
    render(<Card selectedItem={MOCKED_ANIMALS_DATA[0]} />)

    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      MOCKED_ANIMALS_DATA[0].image,
    )
    expect(screen.getByRole("img")).toHaveAttribute("alt", "Bonga shad bird")
    expect(screen.getByText(MOCKED_ANIMALS_DATA[0].url)).toBeInTheDocument()
    expect(screen.getByText(MOCKED_ANIMALS_DATA[0].title)).toBeInTheDocument()
    expect(
      screen.getByText(MOCKED_ANIMALS_DATA[0].description),
    ).toBeInTheDocument()
  })

  it("should truncate description when it exceeds max length", () => {
    const longDescription = "a".repeat(MAX_CARD_DESCRIPTION_LENGTH + 10)
    const expectedTruncatedText = `${"a".repeat(MAX_CARD_DESCRIPTION_LENGTH)}...`

    render(
      <Card
        selectedItem={{
          ...MOCKED_ANIMALS_DATA[0],
          description: longDescription,
        }}
      />,
    )

    expect(screen.getByText(expectedTruncatedText)).toBeInTheDocument()
  })
})
