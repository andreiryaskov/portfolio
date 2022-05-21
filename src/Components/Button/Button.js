import React from 'react';
import s from './Button.module.scss';
import cx from 'classnames';

const Button = ({buttonName, callback, mixButton, type}) => {
    return (
        <div>
            <button onClick={callback}
                    className={cx(s.buttonStyle, mixButton)}
                    type={type}>
                {buttonName}
            </button>
        </div>
    );
};

export default Button;