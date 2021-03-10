import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [taskCounter, setTaskCounter] = useState(0);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskNameFromUser = userInput.trim();
    if (taskNameFromUser === '') {
      return;
    }
    const emptyString = '';
    const newTaskCount = taskCounter + 1;
    const newTasks = [
      ...tasks,
      { name: taskNameFromUser, id: newTaskCount, checked: false },
    ];

    setTasks(newTasks);
    setUserInput(emptyString);
    setTaskCounter(newTaskCount);
  };

  const handleCheck = (id) => {
    const oldTasksList = tasks;
    const indexOfOldTask = oldTasksList.findIndex((task) => task.id === id);
    const oldTask = { ...oldTasksList[indexOfOldTask] };
    const tasksWithoutOldTask = oldTasksList.filter((task) => task.id !== id);
    const newTask = { ...oldTask, checked: !oldTask.checked };
    const newTasks = oldTask.checked
      ? [newTask, ...tasksWithoutOldTask]
      : [...tasksWithoutOldTask, newTask];

    setTasks(newTasks);
  };

  const handleDelete = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);
  };

  return (
    <div className="container">
      <main className="taskContainer">
        <TaskInput
          onSubmit={handleSubmit}
          onChange={handleChange}
          value={userInput}
        />
        <TaskList
          taskList={tasks}
          onCheck={handleCheck}
          onDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
