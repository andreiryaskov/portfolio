import React from 'react';
import style from './Work.module.scss';
import '../../App.css';
import WorkItem from "./WorkItem/WorkItem";


const Work = () => {

    const descrProject = [
        {
            project: {
                name: 'jbhjbh,',
                descr: 'hkjhgbkjb,kjn kjhkj jbjjhb jbjk',
                id: 1
            }
        },
        {
            project: {
                name: 'jbhjbh,',
                descr: 'hkjhgbkjb,kjn kjhkj jbjjhb jbjk',
                id: 2
            }
        },
        {
            project: {
                name: 'jbhjbh,',
                descr: 'hkjhgbkjb,kjn kjhkj jbjjhb jbjk',
                id: 3
            }
        },
        {
            project: {
                name: 'jbhjbh,',
                descr: 'hkjhgbkjb,kjn kjhkj jbjjhb jbjk',
                id: 4
            }
        },
        {
            project: {
                name: 'jbhjbh,',
                descr: 'hkjhgbkjb,kjn kjhkj jbjjhb jbjk',
                id: 5
            }
        },
        {
            project: {
                name: 'jbhjbh,',
                descr: 'hkjhgbkjb,kjn kjhkj jbjjhb jbjk',
                id: 6
            }
        }
    ]


    return (
        <div className='container'>
            <div className={style.section_works}
                 id={'works'}>
                <h2>Work examples</h2>
                <div className={style.works_wrapper}>
                    <div className={style.carousel_wrapper}>
                        {
                            descrProject.map(d => {
                                return <WorkItem descr={d.project.descr}
                                                 name={d.project.name}
                                                 id={d.project.id}
                                                 key={d.project.id}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;