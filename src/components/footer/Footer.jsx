import Form from '../form/Form';
import styles from './footer.module.scss';

const Footer = ({setModalActive, sendStatus, setSendStatus, setSuccessModal}) => {
    return (
        <div className={styles.footer}>
            <Form 
                setModalActive={setModalActive} 
                sendStatus={sendStatus} 
                setSendStatus={setSendStatus}
                setSuccessModal={setSuccessModal}
            />
            <a className={styles.footer__linkDown}>Other Events</a>
        </div>
    )
}

export default Footer;