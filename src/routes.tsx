import { createBrowserRouter } from "react-router-dom"
import { HomePage } from "@/pages/HomePage/HomePage"
import { ResultsPage } from "@/pages/ResultsPage/ResultsPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/results",
    element: <ResultsPage />,
  },
  {
    path: "/results/:searchText",
    element: <ResultsPage />,
  },
])
