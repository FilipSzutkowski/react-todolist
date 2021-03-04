import React from 'react';
import Task from './Task';

const TaskList = (props) => {
  return props.taskList.map((task) => {
    return <Task taskName={task.name} key={task.id} />;
  });
};

export default TaskList;
