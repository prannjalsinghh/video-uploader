import ContactsIcon from '@mui/icons-material/Contacts';
import Navigator from './Navigator';
import styles from './SearchPage.module.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ContactModal from './ContactModal';
const SearchPage = ()=>{
    const [contacts,showContacts]= useState(false);
    
    const showContactHandler = ()=>{
        showContacts(true);
    }
    const toggleContact = ()=>{
        showContacts(false);
    }

    return(
        <>
        {<div className={styles.searchPage}>
            <Navigator heading="Search" type="normal"/>
            <div className={styles.searchBar}>
                <input type='text' className={styles.input} placeholder="Search Here!"/>
                <div onClick={showContactHandler}><ContactsIcon/></div>
            </div>
        </div>}
        {contacts && <ContactModal toggleContact={toggleContact}/>}
        </>
    )
}
export default SearchPage