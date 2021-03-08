import React from 'react';
import { IoIosCheckmark, IoIosTrash } from 'react-icons/io';

class Task extends React.Component {
  render() {
    return (
      <div className="task">
        <p className={this.props.checked ? 'checked' : ''}>
          {this.props.taskName}
        </p>
        <div className="taskBtns">
          <IoIosCheckmark
            tabIndex="0"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              this.props.onCheck(this.props.id);
            }}
          />
          <IoIosTrash
            tabIndex="0"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              this.props.onDelete(this.props.id);
            }}
          />
        </div>
      </div>
    );
  }
}

export default Task;
