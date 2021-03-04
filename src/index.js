import React from 'react';
import ReactDOM from 'react-dom';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

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
    const taskNameFromUser = this.state.userInput.trim();
    if (taskNameFromUser === '') {
      return;
    } else {
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
