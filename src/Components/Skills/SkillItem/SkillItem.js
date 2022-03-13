import React from 'react';
import style from './SkillItem.module.scss';
import '../../../App.css';


const SkillItem = (props) => {
    return (
        <div className={style.skill_item}>
            <div className={style.icon}>{props.icon}</div>
            <div className={style.description}>
                <h4>{props.descr}</h4>
                <p className={style.descr}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </div>

        </div>
    );
};

export default SkillItem;
