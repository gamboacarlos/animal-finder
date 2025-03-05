import styles from "./styles.module.css"
import type { ResultItemSkeletonProps } from "./types"
import type { FC } from "react"

export const ResultItemSkeleton: FC<ResultItemSkeletonProps> = (props) => {
  const { key } = props

  return (
    <div
      key={key}
      className={styles.skeletonContainer}
      data-testid="result-item-skeleton"
    >
      <div className={`${styles.skeletonUrl} ${styles.skeleton}`} />
      <div className={`${styles.skeletonTitle} ${styles.skeleton}`} />
      <div className={`${styles.skeletonDescription} ${styles.skeleton}`} />
    </div>
  )
}
