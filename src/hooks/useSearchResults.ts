import { useEffect, useState } from "react"
import type { Animal } from "@/api/models/animal"
import { getAnimalsList } from "@/api/services/getAnimalsList"

export const useSearchResults = (searchText: string) => {
  const [results, setResults] = useState<Animal[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchAndFilterData = async () => {
      try {
        setIsLoading(true)
        setError(null)

        const animals = await getAnimalsList()

        const filteredResults = animals?.filter((animal) => {
          const searchLower = searchText.toLowerCase()
          return (
            animal.type.toLowerCase().includes(searchLower) ||
            animal.description.toLowerCase().includes(searchLower)
          )
        })
        setResults(filteredResults)
      } catch (err) {
        setError("Failed to fetch animals data")
        setResults([])
        throw err
      } finally {
        setIsLoading(false)
      }
    }
    fetchAndFilterData()
  }, [searchText])

  return { results, isLoading, error }
}
