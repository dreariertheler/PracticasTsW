class ModificarTareaView extends View {
  constructor(model, parentId) {
    super(model, parentId);
  }
  getValor() {
    return document.getElementById(this.parentId).value;
  }

  verModificar() {
    let params = new URLSearchParams(document.location.search);
    let id = params.get('id');

    let tarea = this.model.verTarea(id);
    if (tarea) {
      document.getElementById('name').value = `${tarea._titulo}`;
      document.getElementById('descripcion').value = `${tarea._descripcion}`;
    }
  }
}