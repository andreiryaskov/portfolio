import React from 'react';
import SkillsItem from "./SkillsItem";
import styles from './Skills.module.css';
import react from '../../img/react.png';
import redux from '../../img/redux.png';
import html from '../../img/html.png';

const Skills = () => {
    return (
            <div className={styles.container}>
                <div className={styles.content_wrapper}>
                    <div className={styles.section_name}>
                        <h2>My skills</h2>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.skills_wrapper}>
                        <SkillsItem img={react} name={'React'}/>
                        <SkillsItem img={redux} name={'Redux'}/>
                        <SkillsItem img={html} name={"HTML"}/>
                    </div>
                </div>
            </div>
    );
};

export default Skills;