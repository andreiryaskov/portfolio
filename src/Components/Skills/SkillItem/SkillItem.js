import React from 'react';
import style from './SkillItem.module.scss';
import '../../../App.css';

const SkillItem = () => {
    return (
        <div className={style.skill_item}>
            <div className={style.icon}></div>
            <div className={style.descr}>React</div>
        </div>
    );
};

export default SkillItem;