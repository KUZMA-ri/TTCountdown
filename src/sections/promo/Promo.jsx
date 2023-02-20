import React, { useState } from 'react';
import PrimaryBtn from '../../components/buttons/PrimaryBtn';
import Title from '../../components/title/Title';
import Timer from '../../components/timer/Timer';
import Footer from '../../components/footer/Footer';
import Modal from '../../components/modal/Modal';
import LogoIcon  from '../../images/logo/logo-icon.svg';
import LogoName from '../../images/logo/logo-name.svg';
import LeftWave from '../../images/waves/wave-left.png';
import RightWave from '../../images/waves/wave-right.png';
import styles from './promo.module.scss';

const Promo = () => {
    const [modalActive, setModalActive] = useState(false);
    const [sendStatus, setSendStatus] = useState(false);
    const [successModal, setSuccessModal] = useState(true);

    const desc = 'We \'re making lots of improvements and will be back soon';

    return (
        <div className={styles.promo}>
            {modalActive && (
                <Modal 
                    setModalActive={setModalActive} 
                    successModal={successModal}
                />
            )}
            <div className={styles.promo__container}>
                <div className={styles.promo__waves}>
                    <img className={styles.promo__leftWave} src={LeftWave} alt="image wave" />
                    <img className={styles.promo__rightWave} src={RightWave} alt="image wave" />
                </div>
                <div className={styles.promo__contentWrapper}>
                    {/* Link to url----------------------------------------------------------------------TO DO*/}                          
                    <div className={styles.promo__logo}>
                        <img className={styles.promo__logoIcon} src={LogoIcon} alt="icon" />
                        <img className={styles.promo__logoName} src={LogoName} alt="lead advisors" />
                    </div>
                    <div className={styles.promo__content}>
                        <Title title='Under Construction' desc={desc}/>
                    </div>
                    <Timer />
                    <div className={styles.promo__btnWrapper}>
                        <div>
                            <p className={styles.promo__descBtn}>Check our event page when you wait:</p>
                        </div>
                        <PrimaryBtn text='Go to the event'/>
                    </div>
                </div>
            </div>
            <Footer 
                setModalActive={setModalActive}
                sendStatus={sendStatus} 
                setSendStatus={setSendStatus}
                setSuccessModal={setSuccessModal}
            />  
        </div>
    )
}

export default Promo;