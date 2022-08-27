import SearchIcon from '@mui/icons-material/Search';
import styles from './ContactModal.module.css';
import Navigator from './Navigator';
import ContactEach from './ContactEach'
import { useEffect, useState } from 'react';
import Modal from './Modal'
import { useNavigate } from 'react-router-dom';
import { useSlotProps } from '@mui/base';

const ContactModal = (props)=>{
    const [styled,setStyles]= useState(false);

    useEffect(()=>{
        setStyles(true);
    })

    const navigate =useNavigate()
    const [modalIsOpen,setModalOpen] = useState(false);
    const [selected,setSelected] = useState({name:'',number:'',rank:'',picture:''});

    const arr= [{
        picture:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        name:"Aarush Mishra",
        number:"+91-8248534583",
        rank:"Slightly Good"
    },
    {
        picture:"https://st.depositphotos.com/1269204/1219/i/450/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg",
        name:"Bhanu Pratap",
        number:"+91-8248534583",
        rank:"Marvellous"
    },
    {
        picture:"https://image.shutterstock.com/image-photo/closeup-photo-amazing-short-hairdo-260nw-1617540484.jpg",
        name:"Bhageerathi Patel",
        number:"+91-8248534583",
        rank:"Super Marvellous"
    }
]
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
                {arr.map((each)=><ContactEach modalOpenHandler={modalOpener} item={each}/>)}
            </div>
            </div>
            {modalIsOpen && <Modal onConfirm={ModuleCloseHandler} item={selected} />}
        </div>
    )
}
export default ContactModal;