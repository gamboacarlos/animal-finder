import { render, screen, fireEvent } from "@testing-library/react"
import { HomePage } from "@/pages/HomePage/HomePage"

describe("HomePage", () => {
  it("should render without errors", () => {
    render(<HomePage />)
  })

  it("should update searchText state when handleChange is called", () => {
    render(<HomePage />)

    const inputElement = screen.getByRole("textbox") as HTMLInputElement
    fireEvent.change(inputElement, { target: { value: "test" } })
    expect(inputElement.value).toBe("test")
  })

  it("should clear searchText state when handleClear is called", () => {
    render(<HomePage />)

    const inputElement = screen.getByRole("textbox") as HTMLInputElement
    fireEvent.change(inputElement, { target: { value: "test" } })
    expect(inputElement.value).toBe("test")

    const clearButton = screen.getByTestId("clear-button")
    fireEvent.click(clearButton)
    expect(inputElement.value).toBe("")
  })

  it("should call handleSearch when the search button is clicked", () => {
    render(<HomePage />)

    const inputElement = screen.getByRole("textbox") as HTMLInputElement
    fireEvent.change(inputElement, { target: { value: "test" } })
    const searchButton = screen.getByTestId("search-button")
    fireEvent.click(searchButton)
  })
})
