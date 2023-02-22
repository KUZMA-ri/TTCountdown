import Scroll from 'react-scroll-to-element';
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

            <Scroll type="id" element="events">
                <a className={styles.footer__linkDown}>Other Events</a>
            </Scroll>
        </div>
    )
}

export default Footer;