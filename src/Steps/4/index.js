import React, { useState } from "react";
import "../../App.css";

// 1. create "addTask" arrow fucntion in "Todo" function and use "setTasks" for show all taks and the new task together
// 2. add addTask as props to AddTask function which is imported in Todo function
// 2a. set button disabled if input will be without text
// 3. add value as value to input and create useState for value in "AddTask" function
// 4. add onChange function to input and use set target.value to setValue
// 5. check if value exist and if yes then use addTask funcstion and set value inside
// 6. clear input for new task

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
  return (
    <div className="styledTodo">
      <h1>My First Todo app</h1>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <span>{task.text}</span>
            </li>
          );
        })}
      </ul>
      <AddTask addTask={addTask} />
    </div>
  );
};

export default Todo;
