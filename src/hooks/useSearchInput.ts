import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const useSearchInput = (initialValue = "") => {
  const navigate = useNavigate()
  const [searchText, setSearchText] = useState(initialValue)

  const handleClear = () => {
    setSearchText("")
  }

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(evt.target.value)
  }

  const handleSubmit = (
    evt:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    evt.preventDefault()
    if (searchText) {
      return navigate(`/results/${searchText}`)
    }
    return navigate("/results")
  }

  return {
    searchText,
    handleClear,
    handleChange,
    handleSubmit,
  }
}
