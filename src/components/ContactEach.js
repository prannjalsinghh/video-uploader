import styles from './ContactEach.module.css'
const ContactEach = (props)=>{
    const modalOpenHandler = ()=>{
        const selected = {
            name:props.item.name,
            number:props.item.number,
            picture:props.item.picture,
            rank:props.item.rank
        }
        props.modalOpenHandler(selected);
    }
    return(
        <div className={styles.main} onClick={modalOpenHandler}>
            <div className={styles.left}>
                <img src={props.item.picture}/>
            </div>
            <div className={styles.right}>
                <p className={styles.name}>{props.item.name}</p>
                <div className={styles.bottom}>
                    <p className={styles.rank} style={{
                        backgroundColor: props.item.rank?'rgb(230, 230, 250)':'',
                        color:props.item.rank?'rgb(93, 63, 211)':''
                    }}>{props.item.rank}</p>
                    <p className={styles.number}>{props.item.number}</p>
                </div>
            </div>
        </div>
    )
}
export default ContactEach