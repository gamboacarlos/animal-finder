import type { FC } from "react"
import type { CardProps } from "./types"
import { MAX_CARD_DESCRIPTION_LENGTH } from "@/constants/uiConstants"
import { formatTextWithEllipsis } from "@/utils/stringUtils"
import styles from "./styles.module.css"

export const Card: FC<CardProps> = (props) => {
  const { selectedItem } = props
  if (!selectedItem) return null
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={selectedItem.image}
          alt="Bonga shad bird"
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.url}>{selectedItem.url}</div>
        <h2 className={styles.title}>{selectedItem.title}</h2>
        <p className={styles.description}>
          {formatTextWithEllipsis(
            selectedItem.description,
            MAX_CARD_DESCRIPTION_LENGTH,
          )}
        </p>
      </div>
    </div>
  )
}
