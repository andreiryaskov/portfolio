import React from 'react';
import style from './SocialLinkItem.module.scss';
import '../../../App.css';


const SocialLinkItem = ({link, socialLink, onClick}) => {



    const linkCallback = (link) => {
        onClick(link)
    }

    return (
        <div className={style.socialLink_item}
             // onClick={linkCallback}
        >
            {/*{socialLink}*/}
            <a href={link} onClick={linkCallback(link)}>{socialLink}</a>
        </div>
    );
};

export default SocialLinkItem;