import { useEffect, useState } from "react";

const LoadingPage = ()=>{
    const [styled,setStyled] = useState(false);

    useEffect(()=>{
        setStyled(true);
    },[])
    return(
        <div style={{
            position:styled&&"absolute",
            right:styled&&"-100vh",
            transform:styled&&"translate(-100vh,0)",
            transitionDuration:styled&&"0.5s",width:"100%"
        }}>
            <div style={{display:'flex', flexDirection:'column',alignItems:'center',height:'100vh',justifyContent:'center',textAlign:'center'}}>
            <h1>Your video<br/> is uploading!</h1>
            <p style={{marginBottom:"20px"}}>Please don't quit the app</p>
            <div style={{width:'50%',height:"10px",backgroundColor:"black",borderRadius:'5px'}}></div>
            </div>
        </div>
    )
}
export default LoadingPage;
