import TaskItem from "./TaskItem";

function TaskList({ tareas, toggleCompletada, eliminarTarea }) {
  return (
    <ul>
      {tareas.map((tarea, index) => (
        <TaskItem
          key={index}
          tarea={tarea}
          index={index}
          toggleCompletada={toggleCompletada}
          eliminarTarea={eliminarTarea}
        />
      ))}
    </ul>
  );
}

export default TaskList;
