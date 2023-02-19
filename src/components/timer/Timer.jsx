import React, { useEffect, useState } from 'react';
import styles from './timer.module.scss';

const Timer = () => {
    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');

    let interval;

    const startTimer = () => {
        const deadline = new Date('2023, 05, 31');

        interval = setInterval(() => {
            const today = new Date();
            const difference = deadline - today;

            const days = difference > 0 ? Math.floor(difference / 1000 / 60 / 60 / 24) : 0;
            const hours = difference > 0 ? Math.floor(difference / 1000 / 60 / 60) % 24 : 0;
            const minutes = difference > 0 ? Math.floor(difference / 1000 / 60) % 60 : 0;
            const seconds = difference > 0 ? Math.floor(difference / 1000) % 60 : 0;

            if (difference <= 0) {                  // stop timer
                clearInterval(interval.current);
            } else {                                   
                setDays(days);                       // update timer
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            }
        })
    }

    useEffect(() => {
        startTimer();
    })

    return (
        <div className={styles.timer}>
            <div className={styles.timer__timeWrapper}>
                <div className={styles.timer__daysWrap}>
                    <h2 className={styles.timer__time}>{days < 10 ? `0${days}`: days}</h2>
                    <span className={styles.timer__colon}> : </span>
                </div>
                <div className={styles.timer__hoursWrap}>
                    <h2 className={styles.timer__time}>{hours < 10 ? `0${hours}` : hours}</h2>
                    <span className={styles.timer__colon}> : </span>
                </div>
                <div className={styles.timer__minutesWrap}>
                    <h2 className={styles.timer__time}>{minutes < 10 ? `0${minutes}` : minutes}</h2>
                    <span className={styles.timer__colon}> : </span>
                </div>
                <div className={styles.timer__secondsWrap}>
                    <h2 className={styles.timer__time}>{seconds < 10 ? `0${seconds}` : seconds}</h2>
                </div>
            </div>
            <div className={styles.timer__nameWrapper}>
                <p className={styles.timer__name}>Days</p>
                <p className={styles.timer__name}>Hours</p>
                <p className={styles.timer__name}>Minutes</p>
                <p className={styles.timer__name}>Seconds</p>
            </div>
        </div>
    )
}

export default Timer;