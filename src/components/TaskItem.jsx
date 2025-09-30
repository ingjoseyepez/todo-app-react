import styles from "./TaskItem.module.css";

function TaskItem({ tarea, index, toggleCompletada, eliminarTarea }) {
  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        checked={tarea.completada}
        onChange={() => toggleCompletada(index)}
      />
      <span
        className={`${styles.text} ${
          tarea.completada ? styles.completed : ""
        }`}
      >
        {tarea.texto}
      </span>
      <button
        className={styles.deleteButton}
        onClick={() => eliminarTarea(index)}
      >
        ❌
      </button>
    </li>
  );
}

export default TaskItem;

  