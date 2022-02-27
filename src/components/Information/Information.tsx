import React from 'react';
import styles from './Information.module.css';
import image from '../../img/free.jpg';

const Information = () => {
    return (
            <div className={styles.container}>
                <div className={styles.content_wrapper}>
                    <h1 className={styles.content_description}>
                        Hi! My name is Andrei.<br/> I am front-end developer
                    </h1>
                    <div className={styles.content_img}>
                        <img src={image} alt="photo"/>
                    </div>
                </div>
            </div>
    );
};

export default Information;