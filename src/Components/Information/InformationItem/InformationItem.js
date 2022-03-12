import React from 'react';
import style from './InformationItem.module.scss';
import '../../../App.css';

const InformationItem = (props) => {
    return (
        <div className={style.information_item}>
            <div className={style.contact}>{props.contact}</div>
            <p>{props.data}</p>
        </div>
    );
};

export default InformationItem;