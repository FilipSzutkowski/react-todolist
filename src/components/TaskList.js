import React from 'react';
import Task from './Task';

const TaskList = (props) => {
  return props.taskList.map((task) => {
    return (
      <Task
        taskName={task.name}
        key={task.id}
        id={task.id}
        checked={task.checked}
        onCheck={props.onCheck}
        onDelete={props.onDelete}
      />
    );
  });
};

export default TaskList;
