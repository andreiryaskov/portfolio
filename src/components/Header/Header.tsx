import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.menu_wrapper}>
                    <div className={styles.menu_items}>
                        <ul className={styles.menu_item}>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Skills</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">Contacts</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;