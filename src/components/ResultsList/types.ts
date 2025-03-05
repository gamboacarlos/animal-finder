export interface SearchResultsItem {
  id: number
  title: string
  description: string
  url: string
  image: string
}

export interface SearchResultsProps {
  results: SearchResultsItem[]
  isLoading: boolean
  searchText: string | undefined
}
