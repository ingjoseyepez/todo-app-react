import styles from "./TaskInput.module.css";

function TaskInput({ nuevaTarea, setNuevaTarea, agregarTarea }) {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Escribe una tarea"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />
      <button className={styles.button} onClick={agregarTarea}>
        Agregar
      </button>
    </div>
  );
}

export default TaskInput;
