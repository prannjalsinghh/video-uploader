import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import EachRespect from "./EachRespect";
import Navigator from "./Navigator";
import styles from './Profile.module.css'

const Profile = () => {
    const navigate = useNavigate();
    const [user,setUser] = useState({name:"",image:"",work:"",about:"",respects:[]})

    const location = useLocation()


    useEffect(()=>{
        getUserProfile()
    },[user])

    const getUserProfile = async ()=>{
        let obj={
            number:location.state.id
        }
        const response = await axios.post('https://respects-task.herokuapp.com/findByNumber',obj)
        const data= response?.data;

        let tempUser = {
            name:data?.name,
            image:data?.image,
            work:data?.work,
            about:data?.about,
            respects:data?.respects.reverse()
        }
        setUser(tempUser);
    }
  const backHandler = ()=>{
    navigate('/')
  }
  return(
  <>
    <Navigator heading="Profile" backHandler={backHandler}/>
    <div className={styles.mainProfile}>
        <img className={styles.profileImage} src={user.image}/>
        <h2>{user?.name}</h2>
        <p>{user?.work}</p>
        <p>{user?.about}</p>
        <div className={styles.allRespects}>
            {user?.respects.map((each)=><EachRespect item={each}/>)}
        </div>
    </div>
  </>
  )
};
export default Profile;
