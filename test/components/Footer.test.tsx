import { render, screen } from "@testing-library/react"
import { Footer } from "@/components/Footer/Footer"

describe("Footer Component", () => {
  it("should render without errors", () => {
    render(<Footer />)

    const footerElement = screen.getByTestId("footer")

    expect(footerElement).toBeInTheDocument()
    expect(screen.getByText("© Google 2021")).toBeInTheDocument()
    expect(screen.getByText("version: 0.1.0")).toBeInTheDocument()
    expect(footerElement).toHaveClass("container")
  })
})
