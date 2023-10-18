"use client"

import { useEffect, useState } from "react";
import styles from './input-field.module.css';

const InputField = ({
    value,
    customClassNames,
    clearOnEnter = false,
    onKeyEnterPress = () => { },
    maxChars = 100,
    onValueChange
}) => {

    const [fieldValue, setFieldValue] = useState(value);

    const handleInputChange = (event) => {
        if (event.target.value.length > maxChars) {
            return;
        }
        setFieldValue(event.target.value);
        onValueChange(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {

            onKeyEnterPress();

            if (clearOnEnter) {
                setFieldValue('');
            }
        };
    };

    return (
        <input
            value={fieldValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className={`${styles.input} ${customClassNames}`}
        >
        </input>
    );
};

export default InputField;