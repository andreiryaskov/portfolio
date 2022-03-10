import React from 'react';
import style from './Work.module.scss';
import '../../App.css';
import WorkItem from "./WorkItem/WorkItem";

const Work = () => {
    return (
        <div className='container'>
            <div className={style.works}>
                <h2 className={style.title}>Work examples</h2>
                <WorkItem/>
                <WorkItem/>
                <WorkItem/>
                <WorkItem/>
                <WorkItem/>
                <div className={style.workItem_nav}>
                    <div id={1}></div>
                    <div id={2}></div>
                    <div id={3}></div>
                    <div id={4}></div>
                </div>
            </div>
        </div>

    );
};

export default Work;