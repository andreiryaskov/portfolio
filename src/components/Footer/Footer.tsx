import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
            <div className={styles.container}>
                <div className={styles.content_wrapper}>
                    <h2>Andrei Ryaskov</h2>
                    <div className={styles.content_items_wrapper}>
                        <img src="#" alt="footer-img" className={styles.content_item}/>
                    </div>
                    <h3>☺2022 Все права защищены</h3>
                </div>
            </div>
    );
};

export default Footer;