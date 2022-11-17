class modificarTareaPresenter {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    verModificar() {
        let params = new URLSearchParams(document.location.search); 
        let id = params.get('id');

        let tarea = this.model.verTarea(id);
        if (tarea) {
            document.getElementById('name').value = `${tarea._titulo}`;
            document.getElementById('descripcion').value = `${tarea._descripcion}`;
        }
    }

    guardarModificar(event) { 
        event.preventDefault();
        let params = new URLSearchParams(document.location.search); 
        let id = params.get('id')
        let titulo = document.getElementById('name').value;
        let descripcion = document.getElementById('descripcion').value;
        let tarea = this.model.modificarTarea(id, titulo, descripcion); 
        document.location.href = `ver-tarea.html?id=${tarea._id}`; 
    }

}

