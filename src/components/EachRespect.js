import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './Profile.module.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { Navigate, useNavigate } from 'react-router-dom';

const EachRespect = (props)=>{
    
    const [sentBy,setSentBy] = useState({});
    const navigate = useNavigate()

    useEffect(()=>{
        findSentBy();
    },[]);

    const findSentBy = async ()=>{
        let obj = {
            number:props.item.postedBy
        }
        const response = await axios.post('https://respects-task.herokuapp.com/findByNumber',obj);
       

        let sender = {
            name:response.data?.name,
            image:response.data?.image,
            verified:response.data?.verified
        }

        setSentBy(sender);

    }
    const playerOpenerHandler = ()=>{
        navigate('/player',{state:{id:props.item.url}})
    }

    return(
        <div className={styles.EachRespect}>
            <div className={styles.heading}>
                <div style={{display:"flex",alignItems:"center"}}>
                    <img src={sentBy?.image} />
                    <h4>{sentBy?.name}</h4>
                </div>
                <MoreHorizIcon/>
            </div>
            <div className={styles.videoPlayer}>
                <video className={styles.displayedVideo} src={props.item.url}/>
                <div className={styles.controls}>
                    <div onClick={playerOpenerHandler}>
                        <PlayCircleFilledIcon style={{fontSize:"2rem",color:"white"}}/> 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EachRespect;