import React from 'react';
import style from './Header.module.scss';
import '../../App.css';
import NavItem from "./NavItem/NavItem";

const Header = () => {
    return (
        <header className='container'>
            <nav className={style.nav_wrapper}>
                <NavItem/>
                <NavItem/>
                <NavItem/>
                <NavItem/>
                <NavItem/>
            </nav>
        </header>
    );
};

export default Header;