"use client"

import styles from './page.module.css'
import InputField from '../components/input-field/input-field'
import { useState, useEffect } from 'react';
import Task from '@/components/task/task';

export default function Home() {

  const tasksMock = [
    {
      "id": 1,
      "completed": false,
      "description": "Go to the supermarket"
    },
    {
      "id": 2,
      "completed": false,
      "description": "Take the dog for a long walk"
    },
    {
      "id": 3,
      "completed": false,
      "description": "Call your grandparents and have a chat"
    },
    {
      "id": 4,
      "completed": false,
      "description": "Clean out the garage"
    },
    {
      "id": 5,
      "completed": false,
      "description": "Start a new workout routine"
    },
    {
      "id": 6,
      "completed": false,
      "description": "Plan a weekend getaway"
    }
  ];

  const [descriptionValue, setDescriptionValue] = useState('');
  const [tasks, setTasks] = useState(tasksMock);

  const handleInputEnterPress = () => {

    if (!descriptionValue) {
      return;
    }

    const task = {
      id: Date.now(),
      completed: false,
      description: descriptionValue
    };

    setDescriptionValue('');
    setTasks([...tasks, task]);
  };

  // useEffect(() => {
  //   console.log('page component mount');
  // }, []);

  // useEffect(() => {
  //   console.log('page component render');
  //   console.log('tasks', tasks)
  // });

  const handleTaskChange = (id) => {

    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        }
      }
      return task
    });

    setTasks(updatedTasks);
  };

  return (
    <main className={styles.container}>
      <div className={styles.innerContainer}>
        <h1>Things TODO</h1>
        <InputField
          value={''}
          clearOnEnter={true}
          onKeyEnterPress={handleInputEnterPress}
          maxChars={50}
          customClassNames={styles.inputField}
          onValueChange={(value => setDescriptionValue(value))}
        />
        <div className={styles.taskList}>
          {
            tasks.map((task) => {
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  completed={task.completed}
                  description={task.description}
                  onCheckedChange={handleTaskChange}
                />
              )
            })
          }
        </div>
      </div>
    </main>
  );
};