import { screen, fireEvent } from "@testing-library/react"
import { HomePage } from "@/pages/HomePage/HomePage"
import { renderWithCommonProviders } from "#/custom-render/renderWithCommonProviders"

describe("HomePage", () => {
  it("should render without errors", () => {
    renderWithCommonProviders(<HomePage />)
  })

  it("should update searchText state when handleChange is called", () => {
    renderWithCommonProviders(<HomePage />)

    const inputElement = screen.getByRole("textbox") as HTMLInputElement
    fireEvent.change(inputElement, { target: { value: "test" } })
    expect(inputElement.value).toBe("test")
  })

  it("should clear searchText state when handleClear is called", () => {
    renderWithCommonProviders(<HomePage />)

    const inputElement = screen.getByRole("textbox") as HTMLInputElement
    fireEvent.change(inputElement, { target: { value: "test" } })
    expect(inputElement.value).toBe("test")

    const clearButton = screen.getByTestId("clear-button")
    fireEvent.click(clearButton)
    expect(inputElement.value).toBe("")
  })

  it("should call handleSearch when the search button is clicked", () => {
    renderWithCommonProviders(<HomePage />)

    const inputElement = screen.getByRole("textbox") as HTMLInputElement
    fireEvent.change(inputElement, { target: { value: "test" } })
    const searchButton = screen.getByTestId("search-button")
    fireEvent.click(searchButton)
  })
})
