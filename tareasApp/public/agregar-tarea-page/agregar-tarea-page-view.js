class AgregarTareaPageView extends PageView {
    constructor(model) {
      super(model);
      this.content = `
      <h2>Agregar Tarea N</h2>

      <a href="/tareasApp/listar" onclick="router.route()">Listado</a>
  
      <form action="ver-tarea.html" method="POST">    
          <label>Titulo
              <br>
              <input type="text" id="name" name="user_name">
          </label>
          <br>
           
          <label>Descripcion 
              <br>
              <textarea id="descripcion" name="Descripcion" rows="15" cols="50"></textarea>
          </label>
          <br>
          <form method="POST" action="ver-tarea.html">
              <input type="submit" value="Guardar" onclick="agregarTareaPageController.agregarTareaController.guardar(event)" class="boton">
              <input type="reset" value="Eliminar" class="boton">
          </form>
         </form>
         <br><br><br><br><br><br>`;
        // this.incrementarContadorView = new ContadorView(model, "contador");
    }
    refresh(){
      super.refresh();
      //this.agregarTareaView.refresh();
    }
  }
