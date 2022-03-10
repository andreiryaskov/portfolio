import React from 'react';
import style from './WorkItem.module.scss';
import '../../../App.css';

const WorkItem = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.image}></div>
            <button className={style.open}></button>
            <div className={style.description}></div>
        </div>
    );
};

export default WorkItem;