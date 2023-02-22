import React from 'react';
import { Link } from 'react-router-dom';
import OutlineBtn from '../buttons/OutlineBtn';
import styles from './accordion.module.scss';

const AccordionItem = ({ id, text, date, image, toggle, opened }) => {

    return (
        <div className={styles.accordion__item}>
            <img className={styles.accordion__pic} src={image} alt="image" />
            <div className={styles.accordion__itemLink} onClick={toggle}>
                <h2 className={styles.accordion__titleLinkItem}>{text}</h2>
                <p className={styles.accordion__numLinkItem}>{`0${id}`}</p>
            </div>

            {opened && (
                <div className={styles.accordion__itemHidden}>
                    <div className={styles.accordion__contentWrapper}>
                        <div className={styles.accordion__num}>
                            {`0${id}`}
                        </div>
                        <div className={styles.accordion__content}>
                            <h3 className={styles.accordion__title}>{text}</h3>
                            <p className={styles.accordion__eventDate}>{date}</p>
                            <Link to={'https://afisha.me/film/'}>
                                <OutlineBtn text='More information'/>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AccordionItem;