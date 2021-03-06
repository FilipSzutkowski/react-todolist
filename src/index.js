import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [], userInput: '', taskCounter: 0 };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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
      const emptyString = '';
      const newTaskCount = this.state.taskCounter + 1;
      const newTasks = [
        ...this.state.tasks,
        { name: taskNameFromUser, id: newTaskCount, checked: false },
      ];
      this.setState({
        tasks: newTasks,
        userInput: emptyString,
        taskCounter: newTaskCount,
      });
    }
  }

  handleCheck(id) {
    const updateTask = {...task, checked: }
    const newTasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        task.checked = true;
      }
      return task;
    });
  }

  handleDelete(id) {
    const newTasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({ tasks: newTasks });
  }

  render() {
    return (
      <div className="container">
        <main className="taskContainer">
          <TaskInput
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            value={this.state.userInput}
          />
          <TaskList
            taskList={this.state.tasks}
            onCheck={this.handleCheck}
            onDelete={this.handleDelete}
          />
        </main>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
