import React from 'react';
import style from './WorkItem.module.scss';
import '../../../App.css';
import project_1 from '../../../img/project_1.png';
import Slide from 'react-reveal/Slide';

const WorkItem = () => {

    return (
        <Slide bottom>
            <div className={style.wrapper}>
                <img src={project_1}
                     alt="p_1"/>
                <button>Open</button>
                <div className={style.description}>
                    <h3>Project Name</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
        </Slide>
    );
};

export default WorkItem;