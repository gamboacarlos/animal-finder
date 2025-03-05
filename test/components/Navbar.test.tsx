import { render, screen } from "@testing-library/react"
import { Navbar } from "@/components/Navbar/Navbar"

describe("Navbar", () => {
  it("should render header title when no children are provided", () => {
    render(<Navbar />)

    expect(screen.getByTestId("navbar")).toBeInTheDocument()
    expect(screen.getByText("Agile Content")).toBeInTheDocument()
    expect(screen.getByText("Frontend test")).toBeInTheDocument()
  })

  it("should render children instead of header title when children are provided", () => {
    const testChild = <div data-testid="test-child">Test Child</div>
    render(<Navbar>{testChild}</Navbar>)

    expect(screen.getByTestId("navbar")).toBeInTheDocument()
    expect(screen.getByTestId("test-child")).toBeInTheDocument()
    expect(screen.queryByText("Agile Content")).not.toBeInTheDocument()
    expect(screen.queryByText("Frontend test")).not.toBeInTheDocument()
  })

  it("should render profile image and grip icon", () => {
    render(<Navbar />)

    expect(screen.getByAltText("Profile")).toBeInTheDocument()
    expect(screen.getByAltText("Profile")).toHaveAttribute(
      "src",
      "./profile.jpg",
    )
  })
})
