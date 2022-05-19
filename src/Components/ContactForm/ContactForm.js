import React from 'react';
import style from './ContactForm.module.scss';
import '../../App.css';
import Slide from 'react-reveal/Slide';


const ContactForm = () => {
    return (
        <div className='container'>
            <Slide left>
                <form className={style.section_contact_form}>
                    <h2>Write me</h2>
                    <div className={style.form_wrapper}>
                        <input type="text"/>
                        <input className={style.textarea}
                               type="textarea"/>
                        <button type="submit">Send</button>
                    </div>
                </form>
            </Slide>
        </div>
    );
};

export default ContactForm;