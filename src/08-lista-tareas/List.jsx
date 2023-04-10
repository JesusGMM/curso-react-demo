import { ItemList } from "./ItemList"

export const List = ({ tareas, eliminarTarea, realizarTarea }) => {
  return (
    <ul className="list-group">
      {
        tareas.map(tarea => (
          <ItemList tarea={tarea} key={tarea.id} eliminarTarea={eliminarTarea} realizarTarea={realizarTarea} />
        ))
      }
    </ul>
  )
}
