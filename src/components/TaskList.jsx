import TaskItem from "./TaskItem";
import styles from "./TaskList.module.css"; // Importa CSS Module

function TaskList({ tareas, toggleCompletada, eliminarTarea }) {
  return (
    <ul className={styles.lista}>
      {tareas.map((tarea, index) => (
        <TaskItem
          key={index}
          tarea={tarea}
          index={index}
          toggleCompletada={toggleCompletada}
          eliminarTarea={eliminarTarea}
          className={styles.item} // Pasamos clase al TaskItem si quieres usarla ahí
        />
      ))}
    </ul>
  );
}

export default TaskList;

