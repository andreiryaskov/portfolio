import React from 'react';
import style from './Header.module.scss';
import '../../App.css';

const Header = () => {
    return (
        <header className='container'>
            <nav className={style.nav_wrapper}>
                <ul className={style.nav_list}>
                    <li className={style.nav_item}>home</li>
                    <li className={style.nav_item}>resume</li>
                    <li className={style.nav_item}>portfolio</li>
                    <li className={style.nav_item}>blog</li>
                    <li className={style.nav_item}>contacts</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;