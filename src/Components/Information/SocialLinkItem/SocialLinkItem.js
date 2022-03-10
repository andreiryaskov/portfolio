import React from 'react';
import style from './SocialLinkItem.module.scss';
import '../../../App.css';

const SocialLinkItem = () => {
    return (
        <div className={style.socialLink_item}>
            <a href="https://github.com/andreiryaskov">git</a>
        </div>
    );
};

export default SocialLinkItem;