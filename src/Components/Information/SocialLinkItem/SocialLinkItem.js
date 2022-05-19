import React from 'react';
import style from './SocialLinkItem.module.scss';
import '../../../App.css';

const SocialLinkItem = ({link, socialLink}) => {
    return (
        <div className={style.socialLink_item}>
            {socialLink}
            <a href={link}></a>
        </div>
    );
};

export default SocialLinkItem;