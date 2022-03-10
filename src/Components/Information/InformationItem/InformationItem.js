import React from 'react';
import style from './InformationItem.module.scss';
import '../../../App.css';

const InformationItem = () => {
    return (
        <div className={style.information_item}>
            <img src="#" alt="icon"/>
            <div className={style.contact}>andreiryaskov@gmail.com</div>
        </div>
    );
};

export default InformationItem;