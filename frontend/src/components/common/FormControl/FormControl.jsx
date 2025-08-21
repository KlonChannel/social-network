import React from 'react';

import style from './FormControl.module.css';

const FormControl = (props) => {
    return (
        <div className={style.formError}>
            {props.errorText}
        </div>
    )
}

export default FormControl;