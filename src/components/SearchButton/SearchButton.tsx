import type { FC } from "react"
import styles from "./styles.module.css"

export type SearchButtonProps = {
  onClick: () => void
  searchText: string
}

export const SearchButton: FC<SearchButtonProps> = ({
  onClick,
  searchText,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={searchText ? styles.container : styles.hide}>
        <button type="submit" onClick={onClick} data-testid="search-button">
          Buscar
        </button>
      </div>
    </div>
  )
}
