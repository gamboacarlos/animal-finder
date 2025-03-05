import { useEffect, useState } from "react"
import type { Animal } from "@/api/models/animal"
import { getAnimalsList } from "@/api/services/getAnimalsList"

export const useSearchResults = (searchText = "") => {
  const [results, setResults] = useState<Animal[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!searchText) {
      setResults([])
      setIsLoading(false)
      return
    }

    const fetchAndFilterData = async () => {
      try {
        setIsLoading(true)

        const animals = await getAnimalsList()

        const filteredResults =
          animals?.filter((animal) => {
            const searchLower = searchText.toLowerCase()
            return (
              animal.type.toLowerCase().includes(searchLower) ||
              animal.description.toLowerCase().includes(searchLower)
            )
          }) ?? []
        setResults(filteredResults)
      } catch (err) {
        setResults([])
        throw err
      } finally {
        setIsLoading(false)
      }
    }
    fetchAndFilterData()
  }, [searchText])

  return { results, isLoading }
}
