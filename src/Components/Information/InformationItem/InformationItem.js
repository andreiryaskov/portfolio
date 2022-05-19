import React from 'react';
import style from './InformationItem.module.scss';
import '../../../App.css';

const InformationItem = ({contact, data}) => {
    return (
        <div className={style.information_item}>
            <div className={style.contact}>{contact}</div>
            <p>{data}</p>
        </div>
    );
};

export default InformationItem;