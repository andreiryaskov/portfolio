import React, {useState} from 'react';
import style from './Nav.module.scss';

const Nav = ({isActive}) => {

    const [burgerActive, setBurgerActive] = useState(false)

    const foo = () => {
        isActive()
        setBurgerActive(!burgerActive)
    }

    return (
            <nav className={style.nav}>
                <div className={burgerActive ? style.burgerBtn_active : style.burgerBtn}
                     onClick={foo}>
                    <span/>
                </div>
            </nav>
    );
};

export default Nav;