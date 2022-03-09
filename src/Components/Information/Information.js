import React from 'react';
import style from './Information.module.scss';
import '../../App.css';
import img from '../../img/free.jpg';

const Information = () => {
    return (
        <div className='container'>
            <div className={style.information}>
                <div className={style.photo}>
                    <img src={img} alt="my photo"/>
                    <div className={style.social}>
                        <ul>
                            <li><a href="#"></a>fb</li>
                            <li><a href="#"></a>in</li>
                            <li><a href="#"></a>li</li>
                            <li><a href="#"></a>tg</li>
                        </ul>
                    </div>
                </div>
                <div className={style.description}>
                    <div>
                        <h1>I'm Andrei Riaskov.<br/>I am a frontend developer</h1>
                    </div>
                    <div className={style.divider}></div>
                    <div className={style.more_information}>
                        <ul>
                            <li>06/01/1988</li>
                            <li>andreiryaskov@gmail.com</li>
                            <li>89384136353</li>
                            <li>NewYork</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={style.great_description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam delectus deserunt dolore eos error
                excepturi harum id magnam minus nam optio qui repudiandae, sed, sit sunt ut, vel veritatis vitae!
            </div>
        </div>
    );
};

export default Information;