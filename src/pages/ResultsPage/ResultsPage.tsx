import type { FC } from "react"
import { Navbar } from "@/components/Navbar/Navbar"
import { SearchInput } from "@/components/SearchInput/SearchInput"
import { useSearchInput } from "@/hooks/useSearchInput"
import { Link, useParams } from "react-router-dom"
import { useSearchResults } from "@/hooks/useSearchResults"
import { SearchResultsList } from "@/components/ResultsList/ResultsList"
import styles from "./styles.module.css"

export const ResultsPage: FC = () => {
  const { searchText: routeSearchText } = useParams<{ searchText: string }>()
  const { searchText, handleClear, handleChange, handleSubmit } =
    useSearchInput(routeSearchText || "")
  const { results } = useSearchResults(routeSearchText || "")
  console.log(results)
  return (
    <div className={styles.container}>
      <Navbar>
        <div className={styles.searchContainer}>
          <Link to={"/"}>
            <img src="./google-logo.svg" alt="Google" className={styles.logo} />
          </Link>
          <SearchInput
            searchText={searchText}
            handleClear={handleClear}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </Navbar>

      <SearchResultsList results={results} />
    </div>
  )
}
