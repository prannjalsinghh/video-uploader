import styles from './VideoRecorder.module.css'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
const PostControls = (props) => {
    const [styled,showStyled] = useState(false);
    useEffect(()=>{
        showStyled(true)
    },[])
  return (
    <>
      <div className={styles.postControls} style={{
            bottom: styled &&"-200px",
            transform: styled &&"translate(0,-120px)",
            transitionDuration:styled && "0.5s",
      }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "95%",
          }}
        >
          <h3 style={{ fontSize: "1.40rem" }}>Upload Respect</h3>
          <div onClick={(e) => props.SetRecordingHandler("def")}>
            <CloseIcon />
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", width: "95%" }}>
          <p>Select post privacy</p>
          <div>
            <InfoOutlinedIcon />
          </div>
        </div>
        <p style={{ textAlign: "left", width: "95%" }}>Callout</p>
        <textarea
          type="text"
          placeholder="This is callout section body text, which should not exceed 3-4 lines"
          style={{ border: "none", width: "80%", outline: "none" }}
        />
        <button onClick={(e)=>props.submitHandler()}>Post Respect</button>
      </div>
    </>
  );
};
export default PostControls;