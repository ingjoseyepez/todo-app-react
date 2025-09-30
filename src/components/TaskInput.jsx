function TaskInput({ nuevaTarea, setNuevaTarea, agregarTarea }) {
    return (
      <div>
        <input
          type="text"
          placeholder="Escribe una tarea"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>
    );
  }
  
  export default TaskInput;