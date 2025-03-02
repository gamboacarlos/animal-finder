import type { FC } from "react"
import styles from "./styles.module.css"
import { Search, X } from "lucide-react"
import type { SearchInputProps } from "./types"

export const SearchInput: FC<SearchInputProps> = ({
  searchText,
  handleClear,
  handleChange,
}) => {
  return (
    <div className={styles.container} data-testid="search-input">
      <div className={styles.searchBody}>
        <Search size={18} className={styles.searchIcon} />
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
            <X size={18} />
          </button>
        )}
      </div>
    </div>
  )
}
