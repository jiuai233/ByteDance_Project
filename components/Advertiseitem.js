import styles from '@/styles/hrq.module.css'

const Advertiseitem=(props)=>{
    const delHandler=()=>{
        props.del(props.ad.id);
    }

    return (
        <div className={styles.advertisepicctn}>
            <img src={props.ad.Advertisement} className={styles.advertisepic}></img>
            <div className={styles.tinytext}>广告</div>
            <div className={styles.del} onClick={delHandler}>×</div>
        </div>
    )
}

export default Advertiseitem;