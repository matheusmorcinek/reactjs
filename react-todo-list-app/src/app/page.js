"use client"

import Task from '@/components/task/task';
import SearchIcon from '@mui/icons-material/Search';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import { Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { useEffect, useState } from 'react';
import InputField from '../components/input-field/input-field';
import styles from './page.module.css';

export default function Home() {

  const [inputSearchValue, setInputSearchValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [countTasksLeft, setCountTasksLeft] = useState(0);
  const [filteringTasks, setFilteringTasks] = useState(false);

  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

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
    setCountTasksLeft(tasksLeft.length);
  };

  useEffect(() => {
    updateTaskCompletionCounter();
  }, [tasks]);

  const handleInputSearchChange = (event) => {
    const searchText = event.target.value.toLowerCase();

    const filteredResult = tasks.filter(task => task.description.toLowerCase().includes(searchText.toLowerCase()));
    setInputSearchValue(searchText);
    setFilteringTasks(true);
    setFilteredTasks(filteredResult);
  };

  const handleSearchOffClick = () => {
    setInputSearchValue('');
    setFilteringTasks(false);
  };

  const handleTaskChange = (id) => {
    console.log('handleTaskChange ', id);
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

  const handleAllButtonClick = () => {
    setFilteringTasks(false);
  };

  const handleActiveButtonClick = () => {
    console.log('click')
    const filteredResult = tasks.filter(task => !task.completed);
    setFilteredTasks(filteredResult);
    setFilteringTasks(true);
  };

  const handleCompletedButtonClick = () => {
    const filteredResult = tasks.filter(task => task.completed);
    setFilteredTasks(filteredResult);
    setFilteringTasks(true);
  };

  return (
    <main className={styles.container}>
      <div className={styles.innerContainer}>
        <h1>Things TODO</h1>
        <InputField
          value={''}
          placeholder={'Type your task description and press "Enter" to add it to your list...'}
          clearOnEnter={true}
          onKeyEnterPress={handleInputEnterPress}
          maxChars={50}
          customClassNames={styles.inputField}
          onValueChange={(value => setDescriptionValue(value))}
        />
        <div className={styles.taskList}>
          {
            filteringTasks ?
              filteredTasks.map((task) => {
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
              :
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
                    onClick={handleSearchOffClick}
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
            <Button variant="text" className={styles.footerButton} onClick={handleAllButtonClick}>All</Button>
            <Button variant="text" className={styles.footerButton} onClick={handleActiveButtonClick}>Active</Button>
            <Button variant="text" className={styles.footerButton} onClick={handleCompletedButtonClick}>Completed</Button>
          </div>
        </div>
      </div>
    </main>
  );
};