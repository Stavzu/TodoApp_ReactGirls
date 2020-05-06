import React, { useState } from "react";
import "../../App.css";

// 1. how to check if task if complete? add toggleTask function index "Todo" function
// 2. create a new const called newTasks and set all tasks in array
// 3. compare which tasks is Completed
// 4. add toggleTask to span element when click

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

  return (
    <div>
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
            </li>
          );
        })}
      </ul>
      <AddTask addTask={addTask} />
    </div>
  );
};

export default Todo;
