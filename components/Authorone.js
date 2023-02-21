import styles from '@/styles/hrq.module.css'

const Authorone=(props)=>{
    return (
        <div className={styles.person}>
        <img src="/casul.png" className={styles.portrait}></img>
        <div>
            <div className={styles.name}>{props.item.attributes.Name}</div>
            <div className={styles.introduce}>{props.item.attributes.Introduce}</div>
        </div>
        </div>
    )
}

export default Authorone;