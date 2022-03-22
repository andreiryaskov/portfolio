import React from 'react';
import style from './Information.module.scss';
import '../../App.css';
import InformationItem from "./InformationItem/InformationItem";
import SocialLinkItem from "./SocialLinkItem/SocialLinkItem";
import img from './../../img/free.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedinIn, faTelegram, faVk} from '@fortawesome/free-brands-svg-icons'
import {faAt, faCalendarDays, faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons'


const Information = () => {

    const linkStyle = {
        color: 'black',
        cursor: 'pointer'
    }

    const informationIconStyle = {
        color: '#e6ff00'
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

    const informationIcons = {
        email: {
            icon: <FontAwesomeIcon style={informationIconStyle} icon={faAt}/>,
            data: 'andreiryaskov@gmail.com'
        },
        phone: {
            icon: <FontAwesomeIcon style={informationIconStyle} icon={faPhone}/>,
            data: '+79384136353'
        },
        birthday: {
            icon: <FontAwesomeIcon style={informationIconStyle} icon={faCalendarDays}/>,
            data: '06/01/1988'
        },
        location: {
            icon: <FontAwesomeIcon style={informationIconStyle} icon={faLocationDot}/>,
            data: '353465, GelenWood'
        }
    }


    return (
        <div className='container'>

            <div className={style.information}>
                <div className={style.photo}>
                    <img src={img} alt=""/>
                    <div className={style.social_wrapper}>
                        <SocialLinkItem socialLink={socialLink.github.icon}
                                        link={socialLink.github.link}/>
                        <SocialLinkItem socialLink={socialLink.in.icon}
                                        link={socialLink.in.link}/>
                        <SocialLinkItem socialLink={socialLink.tg.icon}
                                        link={socialLink.tg.link}/>
                        <SocialLinkItem socialLink={socialLink.vk.icon}
                                        link={socialLink.vk.link}/>
                    </div>
                </div>

                <div className={style.description}>

                    <h1>I'm Andrei Riaskov.<br/>I'm a frontend developer.</h1>
                    <hr></hr>
                    <div className={style.contacts_wrapper}>
                        <InformationItem contact={informationIcons.email.icon}
                                         data={informationIcons.email.data}/>
                        <InformationItem contact={informationIcons.phone.icon}
                                         data={informationIcons.phone.data}/>
                        <InformationItem contact={informationIcons.birthday.icon}
                                         data={informationIcons.birthday.data}/>
                        <InformationItem contact={informationIcons.location.icon}
                                         data={informationIcons.location.data}/>
                    </div>
                </div>

            </div>
            <div className={style.great_description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam delectus deserunt dolore eos error
                excepturi harum id magnam minus nam optio qui repudiandae, sed, sit sunt ut, vel veritatis vitae! Lorem
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam delectus deserunt dolore eos error
                excepturi harum id magnam minus nam optio qui repudiandae, sed, sit sunt ut, vel veritatis vitae! Lorem
            </div>
        </div>
    );
};

export default Information;