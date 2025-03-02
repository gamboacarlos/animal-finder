import styles from "./styles.module.css"

export const Footer = () => {
  return (
    <footer className={styles.container} data-testid="footer">
      <div>© Google 2021</div>
      <div>version: 0.1.0</div>
    </footer>
  )
}
