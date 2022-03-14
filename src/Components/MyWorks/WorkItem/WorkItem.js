import React from 'react';
import style from './WorkItem.module.scss';
import '../../../App.css';
import project_1 from '../../../img/project_1.png'

const WorkItem = () => {

    return (
        <div className={style.wrapper}>
            <img src={project_1}
                 alt="p_1"/>
            <button>Open</button>
            <div className={style.description}>
                <h2>Project Name</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
        </div>
    );
};

export default WorkItem;