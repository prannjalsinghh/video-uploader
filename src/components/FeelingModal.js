import styles from './FeelingModal.module.css'
import DiamondIcon from '@mui/icons-material/Diamond';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';
import { grey } from '@mui/material/colors';
const FeelingModal = (props)=>{
    const [selectedIcon, setSelectedIcon] =useState(null);

    const selectedIconHandler = (item)=>{
        if(item==='good'){
            setSelectedIcon('good')
            
        }
        else if(item==='awesome'){
            setSelectedIcon('awesome')
        }
        else if(item==='marvellous'){
            setSelectedIcon('marvellous')
        }
    }

    const formatClickHandler = ()=>{
        props.formatClickHandler(selectedIcon);
    }

    return(
        <div className={styles.main}>
           
                <div className={styles.heading}>
                    <img src={props.item.picture} style={{borderRadius:"50%"}} width="50px" height="50px"/>
                    <h3>{props.item.name}</h3>
                </div>
                <h4 style={{  paddingLeft: "10px"}}>Feeling</h4>
                <div className={styles.AllIcons}>

                    <div className={styles.eachIcon} style={{
                        border: selectedIcon==='good'? 'solid 2px grey':'',
                        color: selectedIcon==='good'?'grey':''
                    }} 
                    onClick={(e)=>selectedIconHandler('good')}>
                        <StarBorderIcon/>
                        <p>Good</p>
                    </div>
                    <div className={styles.eachIcon}
                    style={{
                        border: selectedIcon==='awesome'? 'solid 2px grey':'',
                        color: selectedIcon==='awesome'?'grey':''
                    }} 
                     onClick={(e)=>selectedIconHandler('awesome')}>
                        <DiamondIcon/>
                        <p>Awesome</p>
                    </div>
                    <div className={styles.eachIcon}
                    style={{
                        border: selectedIcon==='marvellous'? 'solid 2px grey':'',
                        color: selectedIcon==='marvellous'?'grey':''
                    }} 
                    onClick={(e)=>selectedIconHandler('marvellous')}>
                        <FavoriteBorderIcon/>
                        <p>Marvellous</p>
                    </div>
                    
                    
                    

                </div>
                
                <button disabled={selectedIcon===null?"true":""} style={{width:"90%",margin:"auto",marginBottom:"20px"} } onClick={formatClickHandler}>
                    <div className={styles.button}>
                        <p>Format</p>
                        <ArrowForwardIcon/>
                    </div>
                </button>
               
           
        </div>
    )
}
export default FeelingModal