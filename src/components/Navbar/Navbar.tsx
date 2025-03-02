import styles from "./styles.module.css"

export const Navbar = () => {
  return (
    <nav className={styles.navbarContainer} data-testid="navbar">
      <div className={styles.headerTitle}>
        <p>
          <span>Agile Content</span> Frontend test
        </p>
      </div>
      <div className={styles.rightSection}>
        <svg viewBox="0 0 24 24" width="24" height="24" focusable="false">
          <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2s-2,0.9 -2,2S4.9,8 6,8zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2s-2,0.9 -2,2S10.9,8 12,8zM18,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2s-2,0.9 -2,2S16.9,8 18,8zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2s-2,0.9 -2,2S4.9,14 6,14zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2s-2,0.9 -2,2S10.9,14 12,14zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2s-2,0.9 -2,2S16.9,14 18,14zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2s-2,0.9 -2,2S4.9,20 6,20zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2s-2,0.9 -2,2S10.9,20 12,20zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2s-2,0.9 -2,2S16.9,20 18,20z" />
        </svg>
        <div className={styles.profileCircle}>
          <img src="./profile.jpg" alt="Profile" />
        </div>
      </div>
    </nav>
  )
}
