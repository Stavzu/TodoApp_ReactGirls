import React, { useState } from "react";
import "../../App.css";

// lets add new task
// 1. create arrow function "AddTask" above Todo function
// 2. create easy form inside with one input (type="text", placeholder="Enter your task here..." and button type submit with text "Add"
// 3. add onSubmit={handleSubmit} to form element and create handleSubmit function with alert("hey I am handle submit")
// 4. import "AddTask" function to "Todo" function below list

const AddTask = () => {
  const handleSubmit = () => {
    alert("hey I am handle submit");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter your task here..." />
      <button type="submit">Add</button>
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
      <AddTask />
    </div>
  );
};

export default Todo;
