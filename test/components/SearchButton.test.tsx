import { render, screen, fireEvent } from "@testing-library/react"
import { SearchButton } from "@/components/SearchButton/SearchButton"

describe("SearchButton", () => {
  const mockOnClick = vi.fn()

  it("should render correctly with search text", () => {
    render(<SearchButton onClick={mockOnClick} searchText="test" />)

    const button = screen.getByTestId("search-button")
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent("Buscar")
  })

  it("should call onClick handler when clicked", () => {
    render(<SearchButton onClick={mockOnClick} searchText="test" />)

    const button = screen.getByTestId("search-button")
    fireEvent.click(button)
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })

  it("should hide button when searchText is empty", () => {
    const { container } = render(
      <SearchButton onClick={mockOnClick} searchText="" />,
    )

    const wrapper = container.firstChild
    expect(wrapper).toHaveClass("wrapper")
  })
})
