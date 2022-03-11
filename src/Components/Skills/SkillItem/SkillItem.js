import React from 'react';
import style from './SkillItem.module.scss';
import '../../../App.css';
import img from '../../../img/react-brands.svg'


const SkillItem = () => {
    return (
        <div className={style.skill_item}>
            <img src='' alt=""/>
            <h5 className={style.descr}>React</h5>
        </div>
    );
};

export default SkillItem;
