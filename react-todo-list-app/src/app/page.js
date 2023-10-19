"use client"

import Task from '@/components/task/task';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import { useState, useEffect } from 'react';
import InputField from '../components/input-field/input-field';
import styles from './page.module.css';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DirectionsIcon from '@mui/icons-material/Directions';
import SearchOffIcon from '@mui/icons-material/SearchOff';

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

  const [inputSearchValue, setInputSearchValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [countTasksLeft, setCountTasksLeft] = useState(0);
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

  const updateTaskCompletionCounter = () => {
    const tasksLeft = tasks.filter(task => !task.completed)
    console.log('tasksLeft.length', tasksLeft)
    setCountTasksLeft(tasksLeft.length);
  };

  useEffect(() => {
    console.log('update', tasks)
    updateTaskCompletionCounter();
  }, [tasks]);

  useEffect(() => {

  }, [inputSearchValue]);

  const handleInputSearchChange = (event) => {
    console.log(event.target.value);
    setInputSearchValue(event.target.value);
  }

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
        <div className={styles.footerContainer}>
          <div>
            <InputBase
              value={inputSearchValue}
              placeholder="Search Tasks"
              inputProps={{ 'aria-label': 'search tasks' }}
              className={styles.footerSearchInput}
              onChange={handleInputSearchChange}
            />
            {
              inputSearchValue ?
                (
                  <IconButton
                    type="button"
                    className={styles.footerSearchIcon}
                    aria-label="search off"
                  >
                    <SearchOffIcon />
                  </IconButton>
                )
                :
                (<SearchIcon className={styles.footerSearchIcon} />)
            }
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <span>
            {
              countTasksLeft ? `${countTasksLeft} task${countTasksLeft > 1 ? 's' : ''} left` : 'all done!'
            }
            </span>
          </div>
          <div>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <Button variant="text" className={styles.footerButton}>All</Button>
            <Button variant="text" className={styles.footerButton}>Active</Button>
            <Button variant="text" className={styles.footerButton}>Completed</Button>
          </div>
        </div>
      </div>
    </main>
  );
};