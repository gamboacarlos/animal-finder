import type { FC } from "react"
import { Navbar } from "@/components/Navbar/Navbar"
import { SearchInput } from "@/components/SearchInput/SearchInput"
import { useSearchInput } from "@/hooks/useSearchInput"
import { Link, useParams } from "react-router-dom"
import { useSearchResults } from "@/hooks/useSearchResults"
import { ResultsList } from "@/components/ResultsList/ResultsList"
import { Footer } from "@/components/Footer/Footer"
import styles from "./styles.module.css"

export const ResultsPage: FC = () => {
  const { searchText: routeSearchText } = useParams<{ searchText: string }>()
  const { searchText, handleClear, handleChange, handleSubmit } =
    useSearchInput(routeSearchText)
  const { results, isLoading } = useSearchResults(routeSearchText)

  return (
    <div className={styles.wrapper}>
      <Navbar>
        <div className={styles.searchInput}>
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
      <div className={styles.resultsContainer}>
        <ResultsList
          results={results}
          isLoading={isLoading}
          searchText={routeSearchText}
        />
      </div>
      <Footer />
    </div>
  )
}
