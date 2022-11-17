class VerTareaPageView extends PageView {
    constructor(model) {
      super(model);
      this.content = `
      <h2>Ver Tarea N</h2>
        <p>
            <a href="index.html">Listado</a> <a href="" onclick="presenter.modificar(event)">Modificar</a>
        </p>

        <label for="username">Titulo:</label><br>
        <p id="name">Titulo</p>
        <label for="username">Descripci&oacute;n:</label><br>
        <p id="descripcion">Descripci&oacute;n</p>`;
          //  this.incrementarContadorView = new ContadorView(model, "contador");
    }
    refresh(){
      super.refresh();
      //this.verTareaView.refresh();
    }
  }