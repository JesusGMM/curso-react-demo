export const listaTareasReducer = (state = [], action) => {

  switch (action.type) {
    case 'AGREGAR':
      console.log(state);
      return [action.payload, ...state,]

    case 'ELIMINAR':
      return state.filter(tarea => tarea.id !== action.payload)

    case 'FINALIZAR':
      return state.map(tarea => {

        if (tarea.id === action.payload)
          tarea.done = !tarea.done
        return tarea
      })
    default:
      state;
  }

}