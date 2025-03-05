import type { SearchResultsItem } from "../ResultsList/types"

export interface ResultItemProps {
  item: SearchResultsItem
  setSelectedItem: (item: SearchResultsItem) => void
}

export interface ResultItemSkeletonProps {
  key: number
}
