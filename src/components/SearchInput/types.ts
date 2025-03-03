export interface SearchInputProps {
  searchText: string
  handleClear: () => void
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (evt: React.FormEvent<HTMLFormElement>) => void
}
