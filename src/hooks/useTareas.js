import { useEffect, useReducer } from "react"
import { listaTareasReducer } from "../08-lista-tareas/tareasReduce"

const initializer = () => {
  return JSON.parse(localStorage.getItem('tareas')) || []
}

export const useTareas = () => {

  const [state, dispatch] = useReducer(listaTareasReducer, [], initializer)

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(state))
  }, [state])


  const agregarTarea = (tarea) => {
    const action = {
      type: 'AGREGAR',
      payload: tarea
    }

    dispatch(action)
  }

  const eliminarTarea = (id) => {
    dispatch({
      type: 'ELIMINAR',
      payload: id
    })
  }

  const realizarTarea = (id) => {
    dispatch({
      type: 'FINALIZAR',
      payload: id
    })
  }
  return { state, agregarTarea, eliminarTarea, realizarTarea }
}