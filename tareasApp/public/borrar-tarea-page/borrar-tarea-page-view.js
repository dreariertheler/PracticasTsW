class BorrarTareaPageView extends PageView {
    constructor(model) {
      super(model);
      this.content = `
      <a href="/tareasApp/listar" onclick="router.route()">Listado</a>
      <div id="tareaBorrada">
      <h2 id="titulo"></h2>
  
      <p id="contenido"></p>
      </div>
      `;
        this.borrarTareaView = new BorrarTareaView(model, "tareaBorrada");
    }
    refresh(){
      super.refresh();
      this.borrarTareaView.borrar();
    }
  }