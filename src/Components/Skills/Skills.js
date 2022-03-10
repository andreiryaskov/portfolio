import React from 'react';
import style from './Skills.module.scss';
import '../../App.css';
import SkillItem from "./SkillItem/SkillItem";

const Skills = () => {
    return (
        <div className={style.skills}>
            <h2 className={style.title}>What i do</h2>
            <div className={style.wrapper}>
                <SkillItem/>
                <SkillItem/>
                <SkillItem/>
                <SkillItem/>
                <SkillItem/>
                <SkillItem/>
            </div>
        </div>
    );
};

export default Skills;