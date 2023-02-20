import React, { useState } from 'react';
import { data } from '../../data';
import styles from './accordion.module.scss';

const Accordion = () => {
    const [activeAccordionItem, setActiveAccordionItem] = useState(false);

    return (
        <article className={styles.accordion}>
                { data.map((el) => {
                    console.log(el.image);
                    return (
                        <div type='radio' key={el.id} id={el.id} className={styles.accordion__item}>
                            <div className={styles.container__content}> 
                                <div className={styles.accordion__titleWrapper}>
                                    <p className={styles.accordion__numItem}>{`0${el.id}`}</p>
                                    <div className={styles.accordion__title}>
                                        <a className={styles.accordion__link} href={`#${el.id}`}>
                                            {el.text}
                                        </a>
                                    </div>
                                </div>

                                <p className={styles.accordion__text}>This content appears on page 1.</p>
                                <button className={styles.accordion__btn}>More Information</button>
                            </div>
                                <img className={styles.accordion__pic} src={el.image} alt="" style={{position: 'absolute', left: '15px', zIndex: '-1'}}/>
                        </div>
                    )
                })}
        </article>
    )
}

export default Accordion;