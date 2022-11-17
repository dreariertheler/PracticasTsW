class AgregarTareaView extends View {
  constructor(model, parentId) {
    super(model, parentId);
  }

  refresh() {
    document.getElementById(this.parentId).value = this.model.valor;
    super.refresh();
  }
}