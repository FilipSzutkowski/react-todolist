import React from 'react';
import ReactDOM from 'react-dom';

class Task extends React.Component {
  render() {
    return <li>{this.props.taskName}</li>;
  }
}

const TaskList = (props) => {
  return props.taskList.map((task) => {
    return <Task taskName={task.name} key={task.id} />;
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
          value={this.props.value}
        ></input>
        <button type="submit">+</button>
      </form>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [], userInput: '', taskCounter: 0 };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ userInput: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const taskNameFromUser = this.state.userInput;
    const newTaskCount = this.state.taskCounter + 1;
    const newTasks = [
      ...this.state.tasks,
      { name: taskNameFromUser, id: newTaskCount },
    ];
    this.setState({
      tasks: newTasks,
      userInput: '',
      taskCounter: newTaskCount,
    });
  }

  render() {
    return (
      <>
        <TaskInput
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          value={this.state.userInput}
        />
        <TaskList taskList={this.state.tasks} />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
