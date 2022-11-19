class VerTareaView extends View {
  constructor(model, parentId) {
    super(model, parentId);
  }
  getValor() {
    return document.getElementById(this.parentId).value;
  }

  ver() {
    let params = new URLSearchParams(document.location.search);
    let id = params.get('id');

    let tarea = this.model.verTarea(id);

    if (tarea) {
      this.model.verTarea(id);
      document.getElementById('name').innerHTML = `${tarea._titulo}`;
      document.getElementById('descripcion').innerHTML = `${tarea._descripcion}`;
    }
  }

}