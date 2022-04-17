import React from 'react';
import '../../App.css';
import style from './Menu.module.scss';

const Menu = ({menuItems, active}) => {
    return (
        <div className={active ? style.menu_wrapper_active : style.menu_wrapper}>
            {/*<div className={style.blur}/>*/}
            <div className={style.menu_content}>
                <ul>
                    {menuItems.map(item =>
                        <li>
                            <a href={item.href}>{item.value}</a>
                        </li>
                    )}
                </ul>
            </div>

        </div>
    );
};

export default Menu;