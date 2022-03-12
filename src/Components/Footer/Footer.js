import React from 'react';
import style from './Footer.module.scss';
import '../../App.css';
import SocialLinkItem from "../Information/SocialLinkItem/SocialLinkItem";

const Footer = () => {
    return (
        <footer className='container'>
            <div className={style.footer}>
                <h7>Copyright 2022 - All right reserved</h7>
                <div className={style.link_wrapper}>
                    <SocialLinkItem/>
                    <SocialLinkItem/>
                    <SocialLinkItem/>
                    <SocialLinkItem/>
                </div>
            </div>
        </footer>

    );
};

export default Footer;