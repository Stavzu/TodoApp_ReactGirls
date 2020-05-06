import React, { useState } from "react";
import "../../App.css";

// 1. we will show list od our data by mapping - add ul and li element and check how you can map your data in React
// 2. import useState from 'react' and put your mock data as initial state => "tasks" will be our variable of current state and "setTasks" function that updates it
// 3. change myData.map to tasks.map - "tasks" is now you intial statet
// 4. now we will check if task is compleed => add className with boolean and if "isCompleted" is true set "todo-text todo-completed" and if "isCompleted" false set just "todo-text"
// 5. check in App.css what each className do

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
              <span
                className={
                  task.isCompleted ? "todo-text todo-completed" : "todo-text"
                }
              >
                {task.text}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
