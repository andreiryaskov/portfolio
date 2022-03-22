import React from 'react';
import '../../App.css';
import style from './Menu.module.scss';

const Menu = ({items, active}) => {
    return (
        <div className='container'>
            <div className={active ? style.menu_wrapper_active : style.menu_wrapper}>
                <div className={style.blur}/>
                <div className={style.menu_content}>
                    <ul>
                        {items.map(item =>
                            <li>
                                <a href={item.href}>{item.value}</a>
                            </li>
                        )}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Menu;