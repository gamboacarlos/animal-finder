import styles from "./styles.module.css"
import type { ModalProps } from "./types"

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <div className={styles.container} onClick={onClose} data-testid="modal">
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
