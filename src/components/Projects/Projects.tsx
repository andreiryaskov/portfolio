import React from 'react';
import ProjectsItem from "./ProjectsItem";
import styles from './Projects.module.css';
import todolist from '../../img/todolist.png';
import count from '../../img/count.png';

const Projects = () => {
    return (
            <div className={styles.container}>
                <div className={styles.content_wrapper}>
                    <div className={styles.section_name}>
                        <h2>My projects</h2>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.projects_wrapper}>
                        <ProjectsItem img={todolist} nameProject={'TodoList'}/>
                        <ProjectsItem img={count} nameProject={'Count'}/>
                    </div>
                </div>
            </div>
    );
};

export default Projects;