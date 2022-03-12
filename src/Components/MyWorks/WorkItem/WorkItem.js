import React from 'react';
import style from './WorkItem.module.scss';
import '../../../App.css';
import project_1 from '../../../img/project_1.png'

const WorkItem = () => {

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
        <div className={style.wrapper}>
            <img src={project_1}
                 alt="p_1"/>
            <button>Open</button>
            <div className={style.description}>
                <h2>Project Name</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore eaque impedit molestias nemo quos repellat sed velit. Aspernatur, autem delectus excepturi ipsa libero magni necessitatibus, nisi, ratione repellendus suscipit ullam.</p>
            </div>
        </div>
    );
};

export default WorkItem;