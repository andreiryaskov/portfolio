import React from 'react';
import s from './Input.module.scss';
import cx from 'classnames';

const Input = ({type, mixInput}) => {
    return (
        <div>
            <input type={type} className={cx(s.inputStyle, mixInput)}/>
        </div>
    );
};

export default Input;