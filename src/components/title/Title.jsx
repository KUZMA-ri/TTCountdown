import styles from './title.module.scss';

const Title = ({title, desc}) => {
    return (
        <div>      
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.desc}>{desc ? desc : null}</p>
        </div>
    )
}

export default Title;