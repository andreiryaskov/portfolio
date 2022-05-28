import React from 'react';
import style from './Footer.module.scss';
import '../../App.css';
import SocialLinkItem from "../Information/SocialLinkItem/SocialLinkItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn, faTelegram, faVk} from "@fortawesome/free-brands-svg-icons";
import Slide from 'react-reveal/Slide';
import {Link} from "react-router-dom";

const Footer = () => {

    const linkStyle = {
        color: '#fff',
        cursor: 'pointer'
    }

    const socialLink = [
        {
            socItem:
                {
                    icon: <FontAwesomeIcon style={linkStyle} icon={faGithub}/>,
                    link: 'https://github.com/andreiryaskov',
                    id: 1
                }
        }
        ,
        {
            socItem:
                {
                    icon: <FontAwesomeIcon style={linkStyle} icon={faLinkedinIn}/>,
                    link: 'https://www.linkedin.com/feed/',
                    id: 2
                }
        },
        {
            socItem: {
                icon: <FontAwesomeIcon style={linkStyle} icon={faTelegram}/>,
                link: 'https://t.me/andreiryaskov',
                id: 3
            }
        },
        {
            socItem: {
                icon: <FontAwesomeIcon style={linkStyle} icon={faVk}/>,
                link: 'https://vk.com/feed',
                id: 4
            }
        }
    ]



    const linkCallback = (link) => {
        <Link to={link}/>
    }

    return (
        <footer className='container'>
            <Slide bottom>
                <div className={style.footer}>
                    <div className={style.link_wrapper}>
                        {
                            socialLink.map(i => {
                                return (
                                    <Slide bottom>
                                        <SocialLinkItem socialLink={i.socItem.icon}
                                                        link={i.socItem.link}
                                                        key={i.socItem.id}
                                                        id={i.socItem.id}
                                                        onClick={linkCallback}/>
                                    </Slide>
                                )
                            })
                        }
                    </div>
                    <p>Copyright 2022 - All right reserved</p>
                </div>
            </Slide>
        </footer>
    );
};

export default Footer;