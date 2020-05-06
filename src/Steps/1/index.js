import React from "react";
import "../../App.css";

// firs step
// 1. create arrow function called Todo and add text "My First Todo app" as h1 element
// what is arrow function?
// 2. create mock data => create json called "myData" and objects inside with todo text "text" which should be string and "isCompleted" which will be boolean and id which will be number
// 3.  import "../../App.css" and add class styledTodo to div

const myData = [
  { id: 1, text: "My first todo - do homework", isCompleted: false },
  { id: 2, text: "My second todo - share positive vibes", isCompleted: true },
  { id: 3, text: "My third todo - create calendar", isCompleted: false },
];

const Todo = () => {
  return (
    <div className="styledTodo">
      <h1>My First Todo app</h1>
    </div>
  );
};

export default Todo;
