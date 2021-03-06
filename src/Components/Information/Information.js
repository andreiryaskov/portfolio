import React from 'react';
import style from './Information.module.scss';
import '../../App.css';
import InformationItem from "./InformationItem/InformationItem";
import SocialLinkItem from "./SocialLinkItem/SocialLinkItem";
import img from './../../img/free.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedinIn, faTelegram, faVk} from '@fortawesome/free-brands-svg-icons'
import {faAt, faCalendarDays, faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons'
import Description from "../Description/Description";
import Slide from 'react-reveal/Slide';
import {Link} from "react-router-dom";


const linkStyle = {
    color: 'black',
    cursor: 'pointer'
}

export const socialLink = [{
    icon: <FontAwesomeIcon style={linkStyle} icon={faGithub}/>,
    link: 'https://github.com/andreiryaskov',
    id: 1

}, {
    icon: <FontAwesomeIcon style={linkStyle} icon={faLinkedinIn}/>,
    link: 'https://www.linkedin.com/feed/',
    id: 2
}, {
    icon: <FontAwesomeIcon style={linkStyle} icon={faTelegram}/>,
    link: 'https://t.me/andreiryaskov',
    id: 3
}, {
    icon: <FontAwesomeIcon style={linkStyle} icon={faVk}/>,
    link: 'https://vk.com/feed',
    id: 4
}
]

const Information = () => {

    // const linkStyle = {
    //     color: 'black',
    //     cursor: 'pointer'
    // }

    const informationIconStyle = {
        color: '#e6ff00'
    }

    const descr = 'Try using words that might appear on the page you’re looking for. For example, "cake recipes" instead of "how tTry using words that might appear on the page you’re looking for. For example, "cake recipes" instead of "how to make a cake.o make a cake.'


    // const socialLink = [
    //     {
    //         linkItem: {
    //             icon: <FontAwesomeIcon style={linkStyle} icon={faGithub}/>,
    //             link: 'https://github.com/andreiryaskov',
    //             id: 1
    //         }
    //     },
    //     {
    //         linkItem:
    //             {
    //                 icon: <FontAwesomeIcon style={linkStyle} icon={faLinkedinIn}/>,
    //                 link: 'https://www.linkedin.com/feed/',
    //                 id: 2
    //             }
    //     },
    //     {
    //         linkItem: {
    //             icon: <FontAwesomeIcon style={linkStyle} icon={faTelegram}/>,
    //             link: 'https://t.me/andreiryaskov',
    //             id: 3
    //         }
    //     },
    //     {
    //         linkItem: {
    //             icon: <FontAwesomeIcon style={linkStyle} icon={faVk}/>,
    //             link: 'https://vk.com/feed',
    //             id: 4
    //         }
    //     }
    // ]

    const informationIcons = [
        {
            infItem: {
                icon: <FontAwesomeIcon style={informationIconStyle} icon={faAt}/>,
                data: 'andreiryaskov@gmail.com',
                id: 1
            }
        },
        {
            infItem: {
                icon: <FontAwesomeIcon style={informationIconStyle} icon={faPhone}/>,
                data: '+79384136353',
                id: 2
            }
        },
        {
            infItem: {
                icon: <FontAwesomeIcon style={informationIconStyle} icon={faCalendarDays}/>,
                data: '06/01/1988',
                id: 3
            }
        },
        {
            infItem: {
                icon: <FontAwesomeIcon style={informationIconStyle} icon={faLocationDot}/>,
                data: '353465, GelenWood',
                id: 4
            }
        }
    ]


    const linkCallback = (link) => {
        <Link to={link}/>
    }

    return (
        <div className='container'>

            <div className={style.information}
                 id={'information'}>
                <div className={style.photo}>
                    <Slide top>
                        <img src={img} alt=""/>
                    </Slide>

                    <Slide left>
                        <div className={style.social_wrapper}>
                            {
                                socialLink.map(i => {
                                    return <SocialLinkItem socialLink={i.icon}
                                                           link={i.link}
                                                           id={i.id}
                                                           key={i.id}
                                                           onClick={linkCallback}/>
                                })
                            }
                        </div>
                    </Slide>
                </div>

                <div className={style.description}>
                    <Slide top>
                        <h1>I'm Andrei Riaskov<br/>I'm a frontend developer</h1>
                    </Slide>

                    <Slide right>
                        <hr></hr>
                    </Slide>

                    <Slide bottom>
                        <div className={style.contacts_wrapper}>
                            {
                                informationIcons.map(i => {
                                    return <InformationItem id={i.infItem.id}
                                                            key={i.infItem.id}
                                                            contact={i.infItem.icon}
                                                            data={i.infItem.data}/>
                                })
                            }
                        </div>
                    </Slide>
                </div>

            </div>
            <div className={style.great_description}>
                <Description description={descr}/>
            </div>
        </div>
    );
};

export default Information;