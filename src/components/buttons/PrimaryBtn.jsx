import styles from './btns.module.scss';

const PrimaryBtn = ({text}) => {
    return (
        <button className={styles.primaryBtn}>{text}</button>
    )
}

export default PrimaryBtn;