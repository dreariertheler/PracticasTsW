class VerTareaView extends View {
  constructor(model, parentId) {
    super(model, parentId);
  }
  getValor() {
    return document.getElementById(this.parentId).value;
  }

  refresh() {
    document.getElementById(this.parentId).value = this.model.valor;
    super.refresh();
  }
}