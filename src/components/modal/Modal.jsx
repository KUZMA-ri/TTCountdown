import closeIcon from '../../images/modal/close-icon.svg';
import styles from './modal.module.scss';

const Modal = () => {
    return (
        <div className={styles.modal}>
            <div className={styles.modal__messageWrapper}>
                <button className={styles.modal__closeBtn}>
                    <img src={closeIcon} alt="close icon" />
                </button>
                <h2 className={styles.modal__status}>Success</h2>
                <p className={styles.modal__desc}>You have successfully subscribed to the email newsletter</p>
                <button className={styles.modal__closeModalBtn}>Close</button>
            </div>
        </div>
    )
}

export default Modal;