export interface ResultItem {
  id: number
  title: string
  description: string
  url: string
}

export interface SearchResultsProps {
  results: ResultItem[]
}
