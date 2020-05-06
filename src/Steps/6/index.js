import React, { useState } from "react";
import "../../App.css";

// would you like remove task? lets create "removeTask" arrow function and get inspired in "toggleTask" function
// 1. use .splice

const AddTask = ({ addTask }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="Enter your task here..."
      />
      <button disabled={!value} type="submit">
        Add
      </button>
    </form>
  );
};

const myData = [
  { id: 1, text: "My first todo - do homework", isCompleted: false },
  { id: 2, text: "My second todo - share positive vibes", isCompleted: true },
  { id: 3, text: "My third todo - create calendar", isCompleted: false },
];

const Todo = () => {
  const [tasks, setTasks] = useState(myData);

  const addTask = (text) => setTasks([...tasks, { text }]);

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="styledTodo">
      <h1>My First Todo app</h1>
      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={task.id}>
              <span
                className={
                  task.isCompleted ? "todo-text todo-completed" : "todo-text"
                }
                onClick={() => toggleTask(index)}
              >
                {task.text}
              </span>
              <button onClick={() => removeTask(index)}><span>Remove</span></button>
            </li>
          );
        })}
      </ul>
      <AddTask addTask={addTask} />
    </div>
  );
};

export default Todo;
