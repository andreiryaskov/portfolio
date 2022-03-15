import React from 'react';
import style from './Work.module.scss';
import '../../App.css';
import WorkItem from "./WorkItem/WorkItem";


const Work = () => {


    return (
        <div className='container'>
            <div className={style.section_works}>
                <h2>Work examples</h2>
                <div className={style.works_wrapper}>
                    <div className={style.carousel_wrapper}>
                        <WorkItem/>
                        <WorkItem/>
                        <WorkItem/>
                        <WorkItem/>
                        <WorkItem/>
                        <WorkItem/>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Work;