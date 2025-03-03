import type { ReactElement, ReactNode } from "react"
import { BrowserRouter } from "react-router-dom"
import { render, type RenderResult } from "@testing-library/react"

interface ProvidersProps {
  children: ReactNode
}

export const renderWithCommonProviders = (ui: ReactElement): RenderResult => {
  const Providers = ({ children }: ProvidersProps) => {
    return <BrowserRouter>{children}</BrowserRouter>
  }

  return render(ui, { wrapper: Providers })
}
