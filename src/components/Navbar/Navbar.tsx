import type { FC } from "react"
import styles from "./styles.module.css"
import { Grip } from "lucide-react"
import type { NavbarProps } from "./types"

export const Navbar: FC<NavbarProps> = ({ children }) => {
  return (
    <nav className={styles.navbarContainer} data-testid="navbar">
      {children ? (
        <div className={styles.searchInput}>{children}</div>
      ) : (
        <div className={styles.headerTitle}>
          <p>
            <span>Agile Content</span> Frontend test
          </p>
        </div>
      )}
      <div className={styles.rightSection}>
        <Grip />
        <div className={styles.profileCircle}>
          <img src="./profile.jpg" alt="Profile" />
        </div>
      </div>
    </nav>
  )
}
