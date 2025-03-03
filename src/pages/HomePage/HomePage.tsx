import { SearchInput } from "@/components/SearchInput/SearchInput"
import { useSearchInput } from "@/hooks/useSearchInput"
import { SearchButton } from "@/components/SearchButton/SearchButton"
import { Footer } from "@/components/Footer/Footer"
import { Navbar } from "@/components/Navbar/Navbar"
import styles from "./styles.module.css"

export const HomePage = () => {
  const { searchText, handleClear, handleChange, handleSubmit } =
    useSearchInput()

  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.container}>
        <img src="./google-logo.svg" alt="google" />
        <SearchInput
          searchText={searchText}
          handleClear={handleClear}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <SearchButton onClick={handleSubmit} searchText={searchText} />
      </div>
      <Footer />
    </div>
  )
}
