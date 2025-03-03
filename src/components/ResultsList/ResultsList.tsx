import type { FC } from "react"
import type { SearchResultsProps } from "./types"
import styles from "./styles.module.css"
import { createUrlFromText, formatTextWithEllipsis } from "@/utils/stringUtils"
import { MAX_RESULT_DESCRIPTION_LENGTH } from "@/constants/uiConstants"

export const SearchResultsList: FC<SearchResultsProps> = (props) => {
  const { results } = props

  return (
    <div className={styles.container}>
      {results.map((item) => (
        <div key={item.id} className={styles.resultItem}>
          <div className={styles.url}>{createUrlFromText(item.title)}</div>

          <a
            href={item.url}
            className={styles.title}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.title}
          </a>

          <p className={styles.description}>
            {formatTextWithEllipsis(
              item.description,
              MAX_RESULT_DESCRIPTION_LENGTH,
            )}
          </p>
        </div>
      ))}
    </div>
  )
}
