import "./Item.css";

export const Item = ({ task, toggleTask, onFilter }) => {
  return (
    <div className="contenedor">
      <input
        className="check"
        type={"checkbox"}
        checked={task.done}
        onChange={() => {
          toggleTask(task);
        }}
      />
      <label for="check" className="task-name">
        {task.name}
      </label>

      <div>
        <button
          className="btn fa-solid fa-trash"
          onClick={() => onFilter(task)}
        ></button>
      </div>
    </div>
  );
};
