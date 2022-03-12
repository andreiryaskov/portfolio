import React from 'react';
import style from './SocialLinkItem.module.scss';
import '../../../App.css';

const SocialLinkItem = (props) => {
    return (
        <div className={style.socialLink_item}>
            {props.socialLink}
            <a href={props.link}></a>
        </div>
    );
};

export default SocialLinkItem;