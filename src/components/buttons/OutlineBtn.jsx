import styles from './btns.module.scss';

const OutlineBtn = ({text}) => {
    return (
        <button className={styles.outlineBtn}>{text}</button>
    )
}

export default OutlineBtn;