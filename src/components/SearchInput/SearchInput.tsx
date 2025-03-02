import type { FC } from "react"
import styles from "./styles.module.css"

interface SearchInputProps {
  searchText: string
  handleClear: () => void
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchInput: FC<SearchInputProps> = ({
  searchText,
  handleClear,
  handleChange,
}) => {
  return (
    <div className={styles.container} data-testid="search-input">
      <div className={styles.searchContainer}>
        <div className={styles.searchIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}
