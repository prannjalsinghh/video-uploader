import styles from './FeelingModal.module.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormatModal = (props)=>{
    const navigate = useNavigate();
    const [selectedType,setSelectedType] =useState('');

    const openRespectHandler = ()=>{
        if(selectedType==='Video'){
            navigate('/recorder',{state:{id:props.item.number,name:props.item.name,selectedRank:props.rank}})
        }
    }

    return(
        <div className={styles.main}>
           
                <div className={styles.heading}>
                    <img src={props.item.picture} style={{borderRadius:"50%"}} width="50px" height="50px"/>
                    <h3>{props.item.name}</h3>
                    <p className={styles.rank} style={{
                        backgroundColor: props.item.rank?'rgb(230, 230, 250)':'',
                        color:props.item.rank?'rgb(93, 63, 211)':''
                    }}>{props.rank}</p>
                </div>
                <h4 style={{  paddingLeft: "10px"}}>Feeling</h4>
                <div className={styles.AllIcons}>

                    <div className={styles.eachIcon} style={{
                       backgroundColor:'#FFFACD',
                       border:selectedType==='Video'?"solid 2px #DAA520":''
                    }} 
                    onClick={(e)=>setSelectedType('Video')}
                    >
                        <VideoCallIcon style={{ color: "#DAA520",fontSize:'40px' }}/>
                        <p>Video</p>
                    </div>
                    <div className={styles.eachIcon}
                    style={{
                       backgroundColor:'rgb(230, 230, 250)',
                       border:selectedType==='Audio'?"solid 2px rgb(93, 63, 211)":''
                    }} 
                    onClick={(e)=>setSelectedType('Audio')}
                     >
                        <KeyboardVoiceIcon style={{color:'rgb(93, 63, 211)',fontSize:'40px'}}/>
                        <p>Audio</p>
                    </div>
                    <div className={styles.eachIcon}
                    style={{
                       backgroundColor:'#7CB9E8',
                       border: selectedType==='Text'?"solid 2px rgb(6, 6, 113)":''
                    }} 
                    onClick={(e)=>setSelectedType('Text')}
                    >
                       <MessageOutlinedIcon style={{fontSize:'40px'}}/>
                        <p>Text</p>
                    </div>
                    
                    
                    

                </div>
                
                <button disabled={selectedType===''?"true":""} style={{width:"90%",margin:"auto",marginBottom:"20px"} }
                onClick={openRespectHandler}
                >
                    <div className={styles.button}>
                        <p>Proceed</p>
                        <ArrowForwardIcon/>
                    </div>
                </button>
               
           
        </div>
    )
}
export default FormatModal;