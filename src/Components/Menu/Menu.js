import React from 'react';
import '../../App.css';
import style from './Menu.module.scss';

const Menu = ({active}) => {

    const menuItems = [
        {value: 'Info', href: '#information', id: 1},
        {value: 'Skills', href: '#skills', id: 2},
        {value: 'Projects', href: '#works', id: 3},
        {value: 'Write me', href: '#contact', id: 4}
    ]

    return (
        <div className={active ? style.menu_wrapper_active : style.menu_wrapper}>
            <div className={style.menu_content}>
                <ul>
                    {menuItems.map(item =>
                        <li>
                            <a href={item.href}
                               key={item.id}
                               id={item.id}>
                                {item.value}
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Menu;