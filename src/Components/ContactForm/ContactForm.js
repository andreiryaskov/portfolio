import React from 'react';
import style from './ContactForm.module.scss';
import '../../App.css';
import Slide from 'react-reveal/Slide';
import Button from "../Button/Button";
import Input from "../Input/Input";


const ContactForm = () => {


    return (
        <div className='container'>
            <Slide left>
                <form className={style.section_contact_form}
                      id={'contact'}>
                    <h2>Write me</h2>
                    <div className={style.form_wrapper}>
                        <Input type={'text'}/>
                        <Input mixInput={style.textarea}
                               type={'textarea'}/>
                        <Button type={'submit'}
                                buttonName={'Send'}
                                mixButton={style.mixButton}/>
                    </div>
                </form>
            </Slide>
        </div>
    );
};

export default ContactForm;