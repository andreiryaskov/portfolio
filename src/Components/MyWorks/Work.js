import React from 'react';
import style from './Work.module.scss';
import '../../App.css';
import SimpleSlider from "./SimpleSlider";

const Work = () => {

    return (
        <div className='container'>
            <div className={style.section_works}>
                <h2 className={style.title}>Work examples</h2>
                <div className={style.works_wrapper}>
                    <div className={style.carousel_wrapper}>
                        <SimpleSlider />
                        <SimpleSlider/>
                        <SimpleSlider/>

                        {/*<WorkItem/>*/}
                        {/*<WorkItem/>*/}
                        {/*<WorkItem/>*/}
                        {/*<WorkItem/>*/}
                        {/*<WorkItem/>*/}
                        {/*<WorkItem/>*/}
                    </div>
                    {/*<div className={style.workItems_nav}>*/}
                    {/*    <div className={style.nav_item}></div>*/}
                    {/*    <div className={style.nav_item}></div>*/}
                    {/*    <div className={style.nav_item}></div>*/}
                    {/*    <div className={style.nav_item}></div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>

    );
};

export default Work;