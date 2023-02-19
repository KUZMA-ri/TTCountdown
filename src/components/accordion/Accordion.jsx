import React, { useState } from 'react';
import { data } from '../../data';
import styles from './accordion.module.scss';

const Accordion = () => {
    const [activeAccordionItem, setActiveAccordionItem] = useState(false);
    console.log(activeAccordionItem);

    return (
    // <div className={styles.accordion}>
    //     <ul className={styles.accordion__list}>
    //         { data.map((el) => {
    //             return (
    //                 <div key={el.id} className={styles.accordion__wrapperItem}>
    //                     <div className={styles.accordion__titleItem}>
    //                         <h3 className={styles.accordion__desc}>{el.text}</h3>
    //                         <h2 className={styles.accordion__title}>{el.number}</h2>
    //                     </div>


    //                     <div className={styles.accordion__content}>
    //                         <h3 className={styles.accordion__eventName}>{el.text}</h3>
    //                         <p className={styles.accordion__eventDate}>{el.date}</p>
    //                         <button className={styles.accordion__btnMore}>More information</button>
    //                     </div>

    //                     <div>
    //                         <img className={styles.accordion__image} src={el.image} alt="image" />
    //                     </div>
    //                 </div>
    //             )
    //         })}
    //     </ul>
    // </div>
    <article className={styles.accordion}>
        {data.map((el) => {
            return(
                <section id={el.id} key={el.id}>
                    <h2><a href={`#${el.id}`}>{el.text}</a></h2>
                    <p>This content appears on page 1.</p>
                </section>
            )
        })}
    </article>
    )
}

export default Accordion;