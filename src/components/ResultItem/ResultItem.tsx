import type { FC } from "react"
import { createUrlFromText, formatTextWithEllipsis } from "@/utils/stringUtils"
import { MAX_RESULT_DESCRIPTION_LENGTH } from "@/constants/uiConstants"
import type { ResultItemProps } from "./types"
import styles from "./styles.module.css"

export const ResultItem: FC<ResultItemProps> = (props) => {
  const { item, setSelectedItem } = props

  return (
    <div key={item.id} className={styles.container}>
      <div className={styles.url}>{createUrlFromText(item.title)}</div>
      <button type="button" onClick={() => setSelectedItem(item)}>
        <p className={styles.title}>{item.title}</p>
      </button>
      <p className={styles.description}>
        {formatTextWithEllipsis(
          item.description,
          MAX_RESULT_DESCRIPTION_LENGTH,
        )}
      </p>
    </div>
  )
}
