import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import styles from '@/styles/hrq.module.css'
import Advertiseitem from "./Advertiseitem"

const Advertisement = ()=>{
    const [advertiseinfo,setAdvertise] = useState([])
    useEffect(()=>{
        axios('http://localhost:1337/api/advertisements?populate=Advertisement')
        .then((response) => {
            // console.log(response.data.data)
            let advertiselist=[]
            response.data.data.forEach((item) => {
                // console.log(item);
                let advertiseitem={}
                advertiseitem.Advertisement="http://localhost:1337"+item.attributes.Advertisement.data.attributes.url
                advertiseitem.id=+item.id
                advertiselist.push(advertiseitem)
            });
            // console.log(advertiselist);
            // console.log(response.data.data[0])
            setAdvertise(advertiselist)
        })
        .catch((error)=> (
            console.log(error)
        ))
    },[])

    const delHandler=(id)=>{
        const newadvertiseinfo=advertiseinfo.filter((item)=>(item.id!==id))
        setAdvertise(newadvertiseinfo)
    }

    return (
        <div className={styles.advertise}>
            {advertiseinfo.map((item)=>{
                return(
                <Advertiseitem key={item.id} ad={item} del={delHandler}/>)
            })}
            <div className={styles.guide}>
                <div><img src="/QRcode.png" className={styles.guidepic}></img></div>
                <div>
                    <div className={styles.guidetext1}>下载稀土掘金APP</div>
                    <div className={styles.guidetext2}>一个帮助开发者成长的社区</div>
                </div>
            </div>
        </div>
    )
}

export default Advertisement