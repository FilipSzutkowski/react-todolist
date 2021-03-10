const TaskInput = ({ value, onChange, onSubmit }) => {
  return (
    <form className="addTask" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Enter your task!"
        onChange={onChange}
        value={value}
      ></input>
      <button type="submit">+</button>
    </form>
  );
};

export default TaskInput;
