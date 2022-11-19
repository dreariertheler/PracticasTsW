class VerTareaPageView extends PageView {
    constructor(model) {
      super(model);
      this.content = `
      <h2>Ver Tarea N</h2>
        <p>
            <a href="/tareasApp/listar" onclick="router.route()">Listado</a> <a href="" onclick="verTareaPageController.verTareaController.modificar(event)">Modificar</a>
        </p>

        <div id="tareaElegida">
        <label for="username">Titulo:</label><br>
        <p id="name">Titulo</p>
        <label for="username">Descripci&oacute;n:</label><br>
        <p id="descripcion">Descripci&oacute;n</p>
        </div>`;
        this.verTareaView = new VerTareaView(model, "tareaElegida");
    }
    refresh(){
      super.refresh();
      this.verTareaView.ver();
      //this.verTareaView.refresh();
    }
  }