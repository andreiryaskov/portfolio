import React from 'react';
import style from './WorkItem.module.scss';
import '../../../App.css';
import project_1 from '../../../img/project_1.png';
import Slide from 'react-reveal/Slide';
import Button from "../../Button/Button";
import Description from "../../Description/Description";

const WorkItem = ({name, descr, id}) => {

    return (
        <Slide bottom>
            <div className={style.wrapper} id={id}>
                <img src={project_1}
                     alt="p_1"/>
                <Button buttonName={'Open'}
                        mixButton={style.mixButton} />
                <div className={style.description}>
                    <Slide left>
                        <h3>{name}</h3>
                        <Description description={descr}/>
                    </Slide>
                </div>
            </div>
        </Slide>
    );
};

export default WorkItem;