import React from 'react';

class Task extends React.Component {
  render() {
    return <li>{this.props.taskName}</li>;
  }
}

export default Task;
