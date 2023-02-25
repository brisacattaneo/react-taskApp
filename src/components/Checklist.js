import React, { useState } from "react";
import "./Checklist.css"

export default function Checklist({createNewTask}) {
  const [newTaskName, setNewTaskName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    createNewTask(newTaskName)
    setNewTaskName(""); //limpia el input (primero el input tiene que obtener el valor del estado.)
    console.log(localStorage);
  }

  return (
    <div className="container">
      <h2 className="title">Task App</h2>
      <form onSubmit={handleSubmit}>
        <input
        className="task-input"
          type="text"
          placeholder="Enter a new task.."
          value={newTaskName} //captura el valor del estado. 
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <button className="send-btn" type="submit">+</button>
      </form>
    </div>
  );
}
