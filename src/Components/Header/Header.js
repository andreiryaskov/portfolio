import React from 'react';
import style from './Header.module.scss';
import '../../App.css';
import NavItem from "./NavItem/NavItem";

const Header = () => {
    return (
        <div className='container'>
            <header className={style.header}>
                <nav className={style.nav_wrapper}>
                    <NavItem/>
                    <NavItem/>
                    <NavItem/>
                    <NavItem/>
                    <NavItem/>
                </nav>
            </header>
        </div>
    );
};

export default Header;