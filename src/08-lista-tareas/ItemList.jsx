
export const ItemList = ({ tarea, eliminarTarea, realizarTarea }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="align-self-center" onClick={() => realizarTarea(tarea.id)} > {tarea.descripcion} </span>
      <button className="btn btn-outline-danger" onClick={() => eliminarTarea(tarea.id)}>Borrar</button>
    </li>
  )
}
