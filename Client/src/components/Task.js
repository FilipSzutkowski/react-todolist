import { IoIosCheckmark, IoIosTrash } from 'react-icons/io';

const Task = ({ id, taskName, checked, onCheck, onDelete }) => {
  return (
    <div className="task">
      <p className={checked ? 'checked' : ''}>{taskName}</p>
      <div className="taskBtns">
        <IoIosCheckmark
          tabIndex="0"
          style={{ cursor: 'pointer' }}
          onClick={() => {
            onCheck(id);
          }}
        />
        <IoIosTrash
          tabIndex="0"
          style={{ cursor: 'pointer' }}
          onClick={() => {
            onDelete(id);
          }}
        />
      </div>
    </div>
  );
};

export default Task;
