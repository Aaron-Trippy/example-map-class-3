import styles from "./Team.module.css"

export default function Team({
    name="name",
    bgcolor="#272727",
    color="#eeeeee",
    font="0",
    image="icon/personTwo.png"
}) {
    return(

        <div className={styles.employeeCard}>
        <div className={`${styles.card}`} style={{backgroundColor: bgcolor, fontSize:font, color: color}}>
            {
                name.toLowerCase()==="harbillicus" ?     <img src={'icon/front-end.png'} width='50'/> :
                name.toLowerCase()==="shoobith" ?        <img src={'icon/web-designer.png'} width='50'/> :
                name.toLowerCase()==="aaron" ?           <img src={'icon/graphic-designer.png'} width='50'/> :
                <img src={image} width='50'/>
            }

            <div className={styles.name}>{name}</div>

        </div>
        </div>
    )
}