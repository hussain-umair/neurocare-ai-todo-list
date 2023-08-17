import Portal from '../Portal/Portal'
import classes from './Modal.module.scss'

const Modal = ({ children, isOpen, handleClose }) => {
  if (!isOpen) return null

  return (
    <Portal wrapperId="portal-modal-container">
      <div className={classes.modal}>
        <div className={classes.modalContent}>
          <button onClick={handleClose}>X</button>
          {children}
        </div>
      </div>
    </Portal>
  )
}

export default Modal
