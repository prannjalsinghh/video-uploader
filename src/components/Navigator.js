import styles from './Navigator.module.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TuneIcon from '@mui/icons-material/Tune';
import { useSlotProps } from '@mui/base';


const Navigator = (props)=>{

    const backHandler = ()=>{
        props.backHandler();
    }
    return(
        <div className={styles.navigation} style={{
            position: props.type==='overlay'? 'absolute':''
        }}>
            <div className={styles.left}>
                <div onClick={backHandler}><ArrowBackIcon/></div>
                <h3>{props.heading}</h3>
            </div>
            <TuneIcon/>
        </div>
    )
}
export default Navigator;