class ModificarTareaController extends Controller {
    constructor(model, view) {
        super(model, view);
    }

    guardarModificar(event) {
        event.preventDefault();
        let params = new URLSearchParams(document.location.search);
        let id = params.get('id')
        let titulo = document.getElementById('name').value;
        let descripcion = document.getElementById('descripcion').value;
        let tarea = this.model.modificarTarea(id, titulo, descripcion);
        router.route("/tareasApp/ver?id="+tarea._id);
    }
}