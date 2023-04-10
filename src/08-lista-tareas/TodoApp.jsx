import { List } from "./List"
import { FormAdd } from "./FormAdd"
import { useTareas } from "../hooks/useTareas"

export const TodoApp = () => {

  const { state, agregarTarea, eliminarTarea, realizarTarea } = useTareas()
  console.log(state);
  return (
    <>
      <h1>Mi lista de tareas </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <List tareas={state} eliminarTarea={eliminarTarea} realizarTarea={realizarTarea} />
        </div>
        <div className="col-5">
          <h4>Agregar tarea</h4>
          <hr />
          <FormAdd agregarTarea={agregarTarea} />
        </div>
      </div>
    </>
  )
}
