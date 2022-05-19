import React from 'react';
import style from './SkillItem.module.scss';
import '../../../App.css';
import Slide from "react-reveal/Slide";


const SkillItem = ({icon, descr, id}) => {
    return (
        <Slide bottom>
            <div className={style.skill_item} id={id}>
                <div className={style.icon}>{icon}</div>
                <div className={style.description}>
                    <h4>{descr}</h4>
                    <p className={style.descr}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                </div>

            </div>
        </Slide>
    );
};

export default SkillItem;
