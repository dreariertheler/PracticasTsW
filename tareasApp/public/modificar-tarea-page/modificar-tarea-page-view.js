class ModificarTareaPageView extends PageView {
    constructor(model) {
      super(model);
      this.content = `
      <h2>Modificar Tarea N</h2>
        <br>
        <a href="/tareasApp/listar" onclick="router.route()">Listado</a>
        <form id="tareaModificar" action="ver-tarea.html">
            <label for="titulo">Titulo</label><br>
            <input id="name" name="title" type="text"
            size="30" value="Tarea N" N><br>
            <label for="username">Descripci&oacute;n</label><br>
            <textarea id="descripcion" name="Descripcion" rows="15" cols="50">Descripci&oacute;n</textarea><br>
            <input type="submit" onclick="modificarTareaPageController.modificarTareaController.guardarModificar(event)" value="Guardar">
            <input type="reset" value="Limpiar">
        </form>
        <br><br><br><br><br><br>`;
            this.modificarTareaView = new ModificarTareaView(model, "tareaModificar");
    }
    refresh(){
      super.refresh();
      this.modificarTareaView.verModificar();
    }
  }