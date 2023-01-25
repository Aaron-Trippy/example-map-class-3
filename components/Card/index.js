import styles from "./Card.module.css"

export default function Card({
    job="none",
    bgcolor="#272727",
    color="#eeeeee",
    font="0",
    image="icon/personTwo.png",
}) {
    return(
        <div className={`${styles.card}`} style={{backgroundColor: bgcolor, fontSize:font, color: color}}>
            {
                job.toLowerCase()==="front-end developer" ?     <img src={'icon/front-end.png'} width='50'/> :
                job.toLowerCase()==="web designer" ?            <img src={'icon/web-designer.png'} width='50'/> :
                job.toLowerCase()==="graphic designer" ?        <img src={'icon/graphic-designer.png'} width='50'/> :
                <img src={image} width='50'/>
            }
            <div className={styles.job}>{job}</div>
        </div>
    )
}