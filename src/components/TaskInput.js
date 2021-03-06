import React from 'react';

class TaskInput extends React.Component {
  render() {
    return (
      <form className="addTask" onSubmit={this.props.onSubmit}>
        <input
          type="text"
          placeholder="Enter your task!"
          onChange={this.props.onChange}
          value={this.props.value}
        ></input>
        <button type="submit">+</button>
      </form>
    );
  }
}

export default TaskInput;
