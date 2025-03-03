import type { FC } from "react"
import styles from "./styles.module.css"
import type { SearchButtonProps } from "./types"

export const SearchButton: FC<SearchButtonProps> = (props) => {
  const { onClick, searchText } = props

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
