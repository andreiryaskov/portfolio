import React from 'react';
import styles from './Skills.module.css';

type PropsType = {
    img: any
    name: string
}


const SkillsItem = (props:PropsType) => {
    return (
            <div className={styles.skill_item}>
                <img src={props.img} alt="react" className={styles.skill_item_img}/>
                <h2 className={styles.skill_item_name}>{props.name}</h2>
                <p className={styles.skill_item_description}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor olore doloremque
                </p>
            </div>
    );
};

export default SkillsItem;