function TaskItem({ tarea, index, toggleCompletada, eliminarTarea }) {
    return (
      <li>
        <input
          type="checkbox"
          checked={tarea.completada}
          onChange={() => toggleCompletada(index)}
        />
        <span style={{ textDecoration: tarea.completada ? "line-through" : "none" }}>
          {tarea.texto}
        </span>
        <button onClick={() => eliminarTarea(index)}>❌</button>
      </li>
    );
  }
  
  export default TaskItem;
  