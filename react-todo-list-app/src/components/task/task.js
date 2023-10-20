"use client"

import { useEffect } from 'react';
import styles from './task.module.css';

const Task = ({ id, completed, description, onCheckedChange }) => {

    const handleTaskChange = () => {
        onCheckedChange(id);
    };

    const handleTaskContainerClick = () => {
        onCheckedChange(id);
    };

    useEffect(() => {
        console.log('id updated: ', id);
        console.log('completed ', completed)
    },[id, completed])

    return (
        <>
            <label htmlFor={id} className={styles.taskContainer} onClick={handleTaskContainerClick}>
                <input
                    id={id}
                    type="checkbox"
                    defaultChecked={completed}
                    onChange={handleTaskChange}
                />
                <span className={styles.taskDescription}>
                    {description}
                </span>
            </label>
            <div className={styles.taskDivider}></div>
        </>
    );
};

export default Task;