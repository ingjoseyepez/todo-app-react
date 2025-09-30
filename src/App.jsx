import { useState, useEffect } from "react";

function App() {
  const [tareas, setTareas] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("tareas")) || [];
    } catch {
      return [];
    }
  });

  const [nuevaTarea, setNuevaTarea] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem("tareas", JSON.stringify(tareas));
      console.log("Guardado en localStorage:", tareas);
    } catch (error) {
      console.error("Error al guardar:", error);
    }
  }, [tareas]);

  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return;
    setTareas([...tareas, nuevaTarea]);
    setNuevaTarea("");
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div>
        <input
          type="text"
          placeholder="Escribe una tarea"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && agregarTarea()}
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>

      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            {tarea} <button onClick={() => eliminarTarea(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
