import SearchIcon from '@mui/icons-material/Search';
import styles from './ContactModal.module.css';
import Navigator from './Navigator';
import ContactEach from './ContactEach'
import { useEffect, useState } from 'react';
import Modal from './Modal'
import { useNavigate } from 'react-router-dom';
import { useSlotProps } from '@mui/base';
import axios from 'axios';




const ContactModal = (props)=>{
    const [styled,setStyles]= useState(false);
    const [AllContacts,setAllContacts] = useState([]);



    useEffect(()=>{
        getAllUsers();
    },[])

    useEffect(()=>{
        setStyles(true);
    })

    const getAllUsers = async()=>{
        const response = await fetch('https://respects-task.herokuapp.com/getUsers')
        const data= await response.json()

        const contacts=[];

        for(let key in data){
            contacts.push({
                picture:data[key].image,
                name:data[key].name,
                number:data[key].number,
                rank:data[key].rank
            })
        }

        setAllContacts(contacts);
        
    }

    const navigate =useNavigate()
    const [modalIsOpen,setModalOpen] = useState(false);
    const [selected,setSelected] = useState({name:'',number:'',rank:'',picture:''});

   
    const modalOpener = (selected)=>{

        setSelected(selected)
        setModalOpen(true);
       
    }
    const ModuleCloseHandler = ()=>{
        setSelected(null);
        setModalOpen(false);
    }
    const backHandler=()=>{
        props.toggleContact();
    }

    return(
        <div className={styles.main} style={{
                left: styled &&  "100vw",
                position: styled && "relative",
                transform: styled && "translate(-100vw,0)",
                transitionDuration: styled && "0.5s"
        }}>
            
            <Navigator backHandler={backHandler} heading="Select Contact" type="normal"/>
            <div style={{marginLeft:"20px",marginRight:"20px"}}>
            <div className={styles.head}>
                <h4>All Contacts</h4>
                <SearchIcon/> 
            </div>
            <div className={styles.AllContacts}>
                {AllContacts.map((each)=><ContactEach modalOpenHandler={modalOpener} item={each}/>)}
            </div>
            </div>
            {modalIsOpen && <Modal onConfirm={ModuleCloseHandler} item={selected} />}
        </div>
    )
}
export default ContactModal;