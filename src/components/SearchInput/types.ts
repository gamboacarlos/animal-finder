export interface SearchInputProps {
  searchText: string
  handleClear: () => void
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
}
