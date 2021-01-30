import React from 'react';
import ReactDOM from 'react-dom';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = { taskName: props.taskName };
  }

  render() {
    return (
      <li>
        <p>{this.state.taskName}</p>
      </li>
    );
  }
}

const TaskList = (props) => {
  return props.taskList.map((task) => {
    return <Task taskName={task} />;
  });
};

class TaskInput extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input
          type="text"
          placeholder="Enter your task!"
          onChange={this.props.onChange}
        ></input>
        <button type="submit">+</button>
      </form>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {}

  handleSubmit(e) {
    console.log(e);
    e.preventDefault();
  }

  render() {
    return (
      <>
        <TaskInput onSubmit={this.handleSubmit} onChange={this.handleChange} />
        {/* <TaskList />  */}
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
