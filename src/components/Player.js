import { useLocation, useNavigate } from "react-router-dom";
import Navigator from "./Navigator";


const Player= ()=>{
    const location = useLocation()
    const navigate = useNavigate();

    const backHandler = ()=>{
        navigate(-1)
    }

    return(
        <div>
            <Navigator heading="Video Review" backHandler={backHandler} type="overlay"/>
            <video src={location.state.id} controls/>
        </div>
    )
}
export default Player;