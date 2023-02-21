import styles from '@/styles/hrq.module.css'

const Authorone=(props)=>{
    return (
        <div className={styles.person}>
        <img src={props.author.portrait} className={styles.portrait}></img>
        <div>
            <div className={styles.name}>{props.author.Name}</div>
            <div className={styles.introduce}>{props.author.Introduce}</div>
        </div>
        </div>
    )
}

export default Authorone;