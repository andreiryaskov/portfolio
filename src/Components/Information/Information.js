import React from 'react';
import style from './Information.module.scss';
import '../../App.css';
import InformationItem from "./InformationItem/InformationItem";
import SocialLinkItem from "./SocialLinkItem/SocialLinkItem";
import img from './../../img/free.jpg'

const Information = () => {
    return (
        <div className='container'>
            <div className={style.information}>

                <div className={style.photo}>
                    <img src={img} alt=""/>
                    <div className={style.social_wrapper}>
                        <SocialLinkItem/>
                        <SocialLinkItem/>
                        <SocialLinkItem/>
                        <SocialLinkItem/>
                    </div>
                </div>

                <div className={style.description}>
                        <h1>I'm Andrei Riaskov.<br/>I am a frontend developer</h1>
                    <hr></hr>
                    <div className={style.contacts_wrapper}>
                        <InformationItem/>
                        <InformationItem/>
                        <InformationItem/>
                        <InformationItem/>
                    </div>
                </div>

            </div>
            <div className={style.great_description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam delectus deserunt dolore eos error
                excepturi harum id magnam minus nam optio qui repudiandae, sed, sit sunt ut, vel veritatis vitae! Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam delectus deserunt dolore eos error
                excepturi harum id magnam minus nam optio qui repudiandae, sed, sit sunt ut, vel veritatis vitae! Lorem
            </div>
        </div>
    );
};

export default Information;