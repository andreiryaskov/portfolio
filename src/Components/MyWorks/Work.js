import React from 'react';
import style from './Work.module.scss';
import '../../App.css';
import WorkItem from "./WorkItem/WorkItem";

const Work = () => {

    // let offset = 0
    // const sliderLine = document.querySelector('.slider-img')
    //
    // document.querySelector('.button_prev').addEventListener('click', () => {
    //     offset += 50
    //     if (offset > 150) {
    //         offset = 0
    //     }
    //     sliderLine.style.left = `${-offset}px`
    // })
    //
    // document.querySelector('.button_next').addEventListener('click', () => {
    //     offset -= 50
    //     if (offset < 0) {
    //         offset = 150
    //     }
    //     sliderLine.style.left = `${-offset}px`
    // })

    return (
        <div className='container'>
            <h2 className={style.title}>Work examples</h2>
            <div className={style.works_wrapper}>
                <div className={style.carousel_wrapper}>
                    <WorkItem/>
                    <WorkItem/>
                    <WorkItem/>
                    <WorkItem/>
                    <WorkItem/>
                    <WorkItem/>
                </div>
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