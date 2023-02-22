import React, { useState } from 'react';
import { data } from '../../utils/data';
import AccordionItem from './AccordionItem';
import styles from './accordion.module.scss';

const Accordion = () => {
    const [opened, setOpened] = useState(0);
    
    return (
        <div className={styles.accordion}>
            {data.map ((el, i) => {
                return (
                    <AccordionItem 
                        key={el.id}
                        {...el} 
                        opened={i === opened}
                        toggle={setOpened.bind(null, i === opened ? null : i)} />
                )
            })}
        </div>
    )
}
export default Accordion;