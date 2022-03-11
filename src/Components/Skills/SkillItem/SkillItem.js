import React from 'react';
import style from './SkillItem.module.scss';
import '../../../App.css';


const SkillItem = () => {
    return (
        <div className={style.skill_item}>
            <img src='#' alt="icon"/>
            <h5 className={style.descr}>React</h5>
        </div>
    );
};

export default SkillItem;
