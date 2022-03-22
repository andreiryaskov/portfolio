import React from 'react';
import style from './Nav.module.scss';

const Nav = ({isActive}) => {

    const foo = () => {
        isActive()
    }

    return (
            <nav className={style.nav}>
                <div className={style.burgerBtn}
                     onClick={foo}>
                    <span/>
                </div>
            </nav>
    );
};

export default Nav;