import type { FC } from "react"
import type { ResultsMessageProps } from "./types"
import styles from "./styles.module.css"

export const ResultsMessage: FC<ResultsMessageProps> = (props) => {
  const { searchText } = props

  return (
    <div className={styles.container} data-testid="results-message">
      {searchText && (
        <p>
          No results found for<span>{` "${searchText}"`}</span>
        </p>
      )}
      <p>
        Try looking for:{" "}
        <span>
          insect, fish, horse, crocodilia, bear, cetacean, cow, lion, rabbit,
          cat, dog, bird.
        </span>
      </p>
    </div>
  )
}
