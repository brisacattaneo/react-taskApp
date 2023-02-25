import { useEffect, useState } from "react";
import "./App.css";
import Checklist from "./components/Checklist";
import TaskTable from "./components/TaskTable";

function App() {
  const [tasksItems, setTasksItems] = useState([]);

  function createNewTask(a) {
    if (!tasksItems.find((task) => task.name === a)) {
      setTasksItems([...tasksItems, { name: a, done: false }]);
    } else alert("repeated task");
  }

  useEffect(() => {
    let data = localStorage.getItem("task");
    if (data) setTasksItems(JSON.parse(data));
  }, []);

  useEffect(() => {
    console.log("this component has been modified");
    localStorage.setItem("task", JSON.stringify(tasksItems));
  }, [tasksItems]);

  const toggleTask = (task) => {
    setTasksItems(
      tasksItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t)),
    );
  };

  function onFilter(task) {
    setTasksItems(tasksItems.filter((e) => e.name !== task.name));
  }
  return (
    <div className="container-a">
      <main className="App">
        <Checklist createNewTask={createNewTask} />
        <TaskTable
          tasks={tasksItems}
          toggleTask={toggleTask}
          onFilter={onFilter}
        />
      </main>
    </div>
  );
}

export default App;
