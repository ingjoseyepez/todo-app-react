
import { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import styles from "./App.module.css";

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
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return;
    const nueva = { texto: nuevaTarea, completada: false };
    setTareas([...tareas, nueva]);
    setNuevaTarea("");
  };

  const eliminarTarea = (index) => {
    setTareas(tareas.filter((_, i) => i !== index));
  };

  const toggleCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de Tareas</h1>
      <TaskInput
        nuevaTarea={nuevaTarea}
        setNuevaTarea={setNuevaTarea}
        agregarTarea={agregarTarea}
      />
      <TaskList
        tareas={tareas}
        toggleCompletada={toggleCompletada}
        eliminarTarea={eliminarTarea}
      />
    </div>
  );
}

export default App;
