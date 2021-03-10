import Task from './Task';

const TaskList = ({ taskList, onCheck, onDelete }) => {
  return taskList.map(({ name, id, checked }) => {
    return (
      <Task
        taskName={name}
        key={id}
        id={id}
        checked={checked}
        onCheck={onCheck}
        onDelete={onDelete}
      />
    );
  });
};

export default TaskList;
