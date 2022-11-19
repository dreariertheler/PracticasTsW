class BorrarTareaView extends View {
  constructor(model, parentId) {
    super(model, parentId);
  }

  borrar() {
    let params = new URLSearchParams(document.location.search);
    let id = params.get('id');

    let tarea = this.model.verTarea(id);
    if (tarea) {
      document.getElementById('titulo').innerHTML = 'Tarea ' + tarea._titulo + '';
      document.getElementById('contenido').innerHTML = 'La tarea ' + tarea._titulo + ' ha sido eliminada';
    }

    this.model.eliminarTarea(id);
  }
}