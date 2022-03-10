import React from 'react';
import style from './ContactForm.module.scss';
import '../../App.css';

const ContactForm = () => {
    return (
        <div className={style.contactForm}>
            <h2 className={style.title}>Write me</h2>
            <div className={style.formWrapper}>
                <input type="text"/>
                <input type="textarea"/>
                <button type="submit"></button>
            </div>
        </div>
    );
};

export default ContactForm;