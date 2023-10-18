"use client"

import styles from './task.module.css';

const Task = ({ id, completed, description, onCheckedChange }) => {

    const handleTaskChange = () => {
        onCheckedChange(id);
    };

    const handleTaskContainerClick = () => {
        console.log('task click ', id);
        onCheckedChange(id);
    };

    return (
        <>
            <div className={styles.taskContainer} onClick={handleTaskContainerClick}>
                <input
                    id={id}
                    type="checkbox"
                    defaultChecked={completed}
                    onChange={handleTaskChange}
                />
                <span className={styles.taskDescription}>
                    {description}
                </span>
            </div>
            <div className={styles.taskDivider}></div>
        </>
    );
};

export default Task;