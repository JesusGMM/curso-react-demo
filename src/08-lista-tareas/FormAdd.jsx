import { useForm } from "../hooks/useForm"

export const FormAdd = ({ agregarTarea }) => {

  const { onInputChange, onResetForm, descripcion } = useForm({ descripcion: '' })

  const onFormSubmit = (event) => {
    event.preventDefault()
    if (descripcion.length <= 1) return

    const nuevaTarea = {
      id: new Date().getTime(),
      descripcion,
      done: false
    }

    agregarTarea(nuevaTarea)
    onResetForm()
  }


  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Mis tareas"
        className="form-control"
        value={descripcion}
        name="descripcion"
        onChange={onInputChange}
      />
      <button className="btn btn-outline-primary mt-2">Agregar</button>
    </form>
  )
}
