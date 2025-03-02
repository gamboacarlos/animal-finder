import { SearchInput } from "@/components/SearchInput/SearchInput"
import { useState } from "react"
import { SearchButton } from "@/components/SearchButton/SearchButton"
import { Footer } from "@/components/Footer/Footer"
import { Navbar } from "@/components/Navbar/Navbar"
import styles from "./styles.module.css"

export const HomePage = () => {
  const [searchText, setSearchText] = useState("")

  const handleClear = () => {
    setSearchText("")
  }

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(evt.target.value)
  }

  const handleSearch = () => {}

  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.container}>
        <img src="./google-logo.svg" alt="google" />
        <SearchInput
          searchText={searchText}
          handleClear={handleClear}
          handleChange={handleChange}
        />
        <SearchButton onClick={handleSearch} searchText={searchText} />
      </div>
      <Footer />
    </div>
  )
}
