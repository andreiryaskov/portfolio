import React from 'react';
import styles from './Wait.module.css';

const Wait = () => {
    return (
            <div className={styles.container}>
                <div className={styles.content_wrapper}>
                    <ul className={styles.wait_description}>
                        <li>Remote work</li>
                        <li>Interesting projects</li>
                        <li>Large amount of money</li>
                    </ul>
                    <button className={styles.wait_button}>Call me</button>
                </div>
            </div>
    );
};

export default Wait;