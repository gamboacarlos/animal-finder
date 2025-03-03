import type { FC } from "react"
import styles from "./styles.module.css"
import { Search, X } from "lucide-react"
import type { SearchInputProps } from "./types"
import { INPUT_ICON_SIZE } from "@/constants/uiConstants"

export const SearchInput: FC<SearchInputProps> = (props) => {
  const { searchText, handleClear, handleChange, handleSubmit } = props

  return (
    <div className={styles.container} data-testid="search-input">
      <form className={styles.searchBody} onSubmit={handleSubmit}>
        <Search size={INPUT_ICON_SIZE} className={styles.searchIcon} />
        <input
          type="text"
          className={styles.searchInput}
          value={searchText}
          onChange={handleChange}
        />
        {searchText && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={handleClear}
            data-testid="clear-button"
          >
            <X size={INPUT_ICON_SIZE} />
          </button>
        )}
      </form>
    </div>
  )
}
