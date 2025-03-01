import { SearchInput } from "@/components/ui/SearchInput"
import styles from "./styles.module.css"

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <SearchInput />
    </div>
  )
}
