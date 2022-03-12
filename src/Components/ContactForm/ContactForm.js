import React from 'react';
import style from './ContactForm.module.scss';
import '../../App.css';

const ContactForm = () => {
    return (
        <div className='container'>
            <div className={style.section_contact_form}>
                <h2 className={style.title}>Write me</h2>
                <div className={style.form_wrapper}>
                    <input type="text"/>
                    <input className={style.textarea}
                           type="textarea"/>
                    <button type="submit"></button>
                </div>
            </div>
        </div>

    );
};

export default ContactForm;