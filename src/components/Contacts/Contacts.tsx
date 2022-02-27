import React from 'react';
import styles from './Contacts.module.css';


const Contacts = () => {
    return (
            <div className={styles.container}>
                <div className={styles.content_wrapper}>
                    <h2>Contacts</h2>
                    <form action="">
                        <input type="text"/>
                        <input type="text"/>
                        <textarea name="" id=""></textarea>
                    </form>
                    <button className={styles.contacts_button}>Send</button>
                </div>
            </div>
    );
};

export default Contacts;