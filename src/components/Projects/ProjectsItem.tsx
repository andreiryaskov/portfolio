import React from 'react';
import styles from './Projects.module.css';

type PropsType = {
    img: any
    nameProject: string

}

const ProjectsItem = (props:PropsType) => {
    return (
        <div className={styles.project_item}>
            <img src={props.img} alt="React" className={styles.project_item_img}/>
            <button className={styles.project_item_button}>Open</button>
            <h2 className={styles.project_item_name}>{props.nameProject}</h2>
            <p className={styles.project_item_description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolore doloremque
            </p>
        </div>
    );
};

export default ProjectsItem;