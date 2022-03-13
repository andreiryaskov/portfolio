import React from 'react';
import style from './Skills.module.scss';
import '../../App.css';
import SkillItem from "./SkillItem/SkillItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReact, faJs, faGitlab, faHtml5, faSass} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {

    const skillsItemStyle = {
        color: '#fff',
        fontSize: '5rem'
    }

    const skillsItemIcon = {
        react: {
            icon: <FontAwesomeIcon style={skillsItemStyle}
                                   icon={faReact} />,
            data: 'React'
        },
        redux: {
            icon: <FontAwesomeIcon  style={skillsItemStyle}
                                    icon={faReact} />,
            data: 'React-Redux'
        },
        ts: {
            icon: <FontAwesomeIcon style={skillsItemStyle}
                                   icon={faJs} />,
            data: 'Type Script'
        },
        axios: {
            icon: <FontAwesomeIcon style={skillsItemStyle}
                                   icon={faGitlab} />,
            data: 'Axios'
        },
        html: {
            icon: <FontAwesomeIcon style={skillsItemStyle}
                                   icon={faHtml5} />,
            data: 'HTML, CSS'
        },
        sass: {
            icon: <FontAwesomeIcon style={skillsItemStyle}
                                   icon={faSass} />,
            data: 'SASS'
        }
    }

    return (
        <div className='container'>
            <div className={style.skills}>
                <h2>What i do</h2>
                <div className={style.wrapper}>
                    <SkillItem icon={skillsItemIcon.react.icon}
                               descr={skillsItemIcon.react.data}/>
                    <SkillItem icon={skillsItemIcon.redux.icon}
                               descr={skillsItemIcon.redux.data}/>
                    <SkillItem icon={skillsItemIcon.ts.icon}
                               descr={skillsItemIcon.ts.data}/>
                    <SkillItem icon={skillsItemIcon.axios.icon}
                               descr={skillsItemIcon.axios.data}/>
                    <SkillItem icon={skillsItemIcon.html.icon}
                               descr={skillsItemIcon.html.data}/>
                    <SkillItem icon={skillsItemIcon.sass.icon}
                               descr={skillsItemIcon.sass.data}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;