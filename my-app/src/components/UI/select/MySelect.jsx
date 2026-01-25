import React from 'react';
import classes from './MySelect.module.css'

const MySelect = ({option, defaultValue, value,onChange}) => {
    return (
        <div>
            <select
                value={value}
                onChange={event => onChange(event.target.value)}
                className={classes.mySelect}
            >
                <option disabled value=''>{defaultValue}</option>
                {option.map(option =>
                    <option key = {option.value} value = {option.value}>
                        {option.name}
                    </option>
                )}
            </select>
        </div>
    );
};

export default MySelect;