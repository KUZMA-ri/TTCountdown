import closeIcon from '../../images/modal/close-icon.svg';
import styles from './modal.module.scss';

const Modal = ({setModalActive, successModal}) => {

    return (
        <div className={styles.modal}>
            <div className={styles.modal__messageWrapper}>
                <button 
                    className={styles.modal__closeBtn}
                    onClick={(() => setModalActive(false))}>
                    <img src={closeIcon} alt="close icon" />
                </button>
                
                {successModal && (
                    <>
                        <h2 className={styles.modal__status}>Success</h2>
                        <p className={styles.modal__desc}>You have successfully subscribed to the email newsletter</p>
                    </>
                )}

                {!successModal && (
                    <>
                        <p className={styles.modal__desc}>"Wait a minute. Something go wrong"</p>
                    </>
                )}

                <button 
                    className={styles.modal__closeModalBtn}
                    onClick={(() => setModalActive(false))}
                    >Close
                </button>
            </div>
        </div>
    )
}

export default Modal;