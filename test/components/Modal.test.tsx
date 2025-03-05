import { render, screen, fireEvent } from "@testing-library/react"
import { Modal } from "@/components/Modal/Modal"

describe("Modal", () => {
  const mockOnClose = vi.fn()
  const mockChildren = <div data-testid="modal-content">Test Content</div>

  beforeEach(() => {
    mockOnClose.mockClear()
  })

  it("should not render when isOpen is false", () => {
    render(
      <Modal isOpen={false} onClose={mockOnClose}>
        {mockChildren}
      </Modal>,
    )

    expect(screen.queryByTestId("modal")).not.toBeInTheDocument()
  })

  it("should render when isOpen is true", () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose}>
        {mockChildren}
      </Modal>,
    )

    expect(screen.getByTestId("modal")).toBeInTheDocument()
    expect(screen.getByTestId("modal-content")).toBeInTheDocument()
    expect(screen.getByText("Test Content")).toBeInTheDocument()
  })

  it("should call onClose when clicking the overlay", () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose}>
        {mockChildren}
      </Modal>,
    )

    fireEvent.click(screen.getByTestId("modal"))
    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })

  it("should not call onClose when clicking the modal content", () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose}>
        {mockChildren}
      </Modal>,
    )

    fireEvent.click(screen.getByTestId("modal-content"))
    expect(mockOnClose).not.toHaveBeenCalled()
  })
})
