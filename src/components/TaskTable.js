import {Item} from "./Item";
import "./TaskTable.css"

export default function TaskTable({ tasks, toggleTask, onFilter}) {

  return (
<div className="task-container">
  <h3 className="encabezado"> Things to do:</h3>
  <ul className="task-list">
    {tasks.map((task) => (
      <Item
        task={task}
        key={task.name}
        toggleTask={toggleTask}
        onFilter={onFilter}
      />
    ))}
  </ul>
</div>
  );
}



/*    <div>
      <table>
        <thead>
          <tr>
            <th>Tareas</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Item task={task} key={task.name} toggleTask={toggleTask} onFilter={onFilter}/>
          ))}
        </tbody>
      </table>
    </div> */
