// import { useRouter } from 'next/router'
import axios from "axios"
import styles from '@/styles/hrq.module.css'
import Authorone from './Authorone'

const Author = (props,{Author_List})=>{
    return (
    <div className={styles.author}>
        <div className={styles.title}>
            <img src="/authorlist.png" className={styles.titleicon}></img>
            <div className={styles.titletext}>作者榜</div>
        </div>
        <div className={styles.people}>
            {/* {{Author_List}.map((item) => (
                <Authorone key={item.id} author={item} />
            ))} */}
            {Author_List}
        </div>
        <div className={styles.alldata}>
            <a>
                完整榜单
                <div className={styles.arrow}></div>
            </a>
        </div>
        <div>{Author_List}</div>
    </div>
    )
}
Author.getInitialProps=async ()=>{
    const promise=new Promise((resolve)=>{
        axios('http://localhost:1337/api/authors')
        .then((response) => {
            console.log(response.data.data)
            resolve(response.data.data)
        })
        .catch((error)=> (
            console.log(error)
        ));
    });
    return await promise;
}

export default Author;