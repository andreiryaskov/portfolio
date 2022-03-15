import React from 'react';
import style from './Footer.module.scss';
import '../../App.css';
import SocialLinkItem from "../Information/SocialLinkItem/SocialLinkItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn, faTelegram, faVk} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

    const linkStyle = {
        color: '#fff',
        cursor: 'pointer'
    }

    const socialLink = {
        github:
            {
                icon: <FontAwesomeIcon style={linkStyle} icon={faGithub}/>,
                link: 'https://github.com/andreiryaskov'
            }
        ,
        in: {
            icon: <FontAwesomeIcon style={linkStyle} icon={faLinkedinIn}/>,
            link: 'https://www.linkedin.com/feed/'
        },
        tg: {
            icon: <FontAwesomeIcon style={linkStyle} icon={faTelegram}/>,
            link: '@andreiryaskov'
        },
        vk: {
            icon: <FontAwesomeIcon style={linkStyle} icon={faVk}/>,
            link: 'https://vk.com/feed'
        }
    }

    return (
        <footer className='container'>
            <div className={style.footer}>

                <div className={style.link_wrapper}>
                    <SocialLinkItem socialLink={socialLink.github.icon}
                                    link={socialLink.github.link}/>
                    <SocialLinkItem socialLink={socialLink.in.icon}
                                    link={socialLink.in.link}/>
                    <SocialLinkItem socialLink={socialLink.tg.icon}
                                    link={socialLink.tg.link}/>
                    <SocialLinkItem socialLink={socialLink.vk.icon}
                                    link={socialLink.vk.link}/>
                </div>
                <p>Copyright 2022 - All right reserved</p>
            </div>
        </footer>

    );
};

export default Footer;