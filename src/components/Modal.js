import styles from './Modal.module.css'
import FeelingModal from './FeelingModal'
import { useEffect, useState } from 'react'
import FormatModal from './FormatModal'

const Modal = (props)=>{
    const [Modal,setModal] = useState('feeling')
    const [selectedRank, setSelectedRank] = useState('');
    const [modalAnim,SetModalAnim] = useState(false);

    useEffect(()=>{
        SetModalAnim(true)
    },[])

    const formatClickHandler = (selectedIcon)=>{
        setSelectedRank(selectedIcon);
        setModal('format');
    }
    return(
        <div> 
            <div className={styles.backdrop} onClick={props.onConfirm}  />
            <div className={styles.modal}  style={{
                bottom:modalAnim && "-320px",
                transform:modalAnim && "translate(0, -320px)",
                transitionDuration:modalAnim && "0.5s",
            }}>
                
                {Modal==='feeling' &&<FeelingModal formatClickHandler={formatClickHandler} item={props.item}/>}
                {Modal==='format' && <FormatModal rank={selectedRank} item={props.item}/>}
                
            </div>
            
        </div>
    )
}
export default Modal;