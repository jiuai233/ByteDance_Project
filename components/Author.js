import axios from "axios"
import styles from '@/styles/hrq.module.css'
import Authorone from './Authorone'
import { useEffect } from "react"
import { useState } from "react"

const Author = ()=>{
    const [authorinfo,setAuthorinfo] = useState([])
    useEffect(()=>{
        axios('http://localhost:1337/api/authors?populate=portrait')
        .then((response) => {
            // console.log(response.data.data)
            let authorlist=[]
            response.data.data.forEach((item) => {
                // console.log(item);
                let authoritem={}
                authoritem.Name=item.attributes.Name
                authoritem.Introduce=item.attributes.Introduce
                authoritem.portrait="http://localhost:1337"+item.attributes.portrait.data.attributes.url
                authoritem.id=+item.id
                authorlist.push(authoritem)
            });
            // console.log(response.data.data[0])
            setAuthorinfo(authorlist)
        })
        .catch((error)=> (
            console.log(error)
        ))
    },[])
    return (
    <div className={styles.author}>
        <div className={styles.title}>
            <img src="/authorlist.png" className={styles.titleicon}></img>
            <div className={styles.titletext}>作者榜</div>
        </div>
        <div className={styles.people}>
            {authorinfo.map((item) => (
                <Authorone key={item.id} author={item} />
            ))}
        </div>
    </div>
    )
}

export default Author