import React from 'react';
import Accordion from '../../components/accordion/Accordion';
import Title from '../../components/title/Title';
import styles from './events.module.scss';

const Events = () => {
    return (
        <div className={styles.events}>
            <div className={styles.events__container}>
                <Title title='All events'/>
                <Accordion />
            </div>
        </div>
    )
}

export default Events