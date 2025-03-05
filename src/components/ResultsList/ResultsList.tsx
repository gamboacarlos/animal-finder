import { useEffect, useState, type FC } from "react"
import type { SearchResultsItem, SearchResultsProps } from "./types"
import { Card } from "../Card/Card"
import { ResultItem } from "../ResultItem/ResultItem"
import { ResultItemSkeleton } from "../ResultItem/ResultItemSkeleton"
import { ResultsMessage } from "../ResultsMessage/ResultsMessage"
import { Modal } from "../Modal/Modal"
import styles from "./styles.module.css"

export const ResultsList: FC<SearchResultsProps> = (props) => {
  const { results, isLoading, searchText } = props

  const [selectedItem, setSelectedItem] = useState<SearchResultsItem | null>(
    null,
  )

  useEffect(() => {
    setSelectedItem(null)
  }, [results])

  if (results.length === 0 && !isLoading) {
    return <ResultsMessage searchText={searchText} />
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.resultsBody}>
        {isLoading
          ? [...Array(8).keys()].map((key) => {
              return <ResultItemSkeleton key={key} />
            })
          : results.map((item) => (
              <ResultItem
                key={item.id}
                item={item}
                setSelectedItem={setSelectedItem}
              />
            ))}
      </div>
      <div className={styles.card}>
        <Card selectedItem={selectedItem} />
      </div>
      <div className={styles.cardModal}>
        <Modal isOpen={!!selectedItem} onClose={() => setSelectedItem(null)}>
          <Card selectedItem={selectedItem} />
        </Modal>
      </div>
    </div>
  )
}
