class ListarTareaPageView extends PageView {
    constructor(model) {
      super(model);
      this.content = `
      <h2>Listado de tareas</h2>
            <table>
                <caption> <b>Tarea </b></caption>
                <tbody id='tareas'>
                </tbody>
            </table>
            <br>
            <button><a href="/tareasApp/agregar" onclick="router.route()">Agregar</a></button>
            <br><br><br><br><br><br>`;
          //  this.incrementarContadorView = new ContadorView(model, "contador");
    }
    refresh(){
      super.refresh();
      listarTareaPageController.listarTareaController.listar();
      //this.listarTareaView.refresh();
    }
  }