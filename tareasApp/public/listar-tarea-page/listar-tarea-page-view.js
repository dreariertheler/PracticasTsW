class ListarTareaPageView extends PageView {
    constructor(model) {
      super(model);
      this.content = `
      <h2>Listado de tareas</h2>
            <table id="lista_tareas">
                <caption> <b>Tarea </b></caption>
                <tbody id='tareas'>
                </tbody>
            </table>
            <br>
            <button onclick="router.route('\/tareasApp\/agregar')">Agregar</button>
            <br><br><br><br><br><br>`;
            this.listarTareaView = new ListarTareaView(model, "lista_tareas");
    }
    refresh(){
      super.refresh();
      this.listarTareaView.listar();
    }
  }