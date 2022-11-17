class TareasAppPresenter {
	constructor(model, view) {
		this.model = model;
		this.view = view;
	}

	borrar(){
        let params = new URLSearchParams(this.view.location.search); 
		let id = params.get('id');

        let tarea = this.model.verTarea(id);
        if(tarea){
			document.getElementById('titulo').innerHTML='Tarea '+tarea._titulo+'';
            document.getElementById('contenido').innerHTML='La tarea '+tarea._titulo+' ha sido eliminada';	
		}

        this.model.eliminarTarea(id);     
	}
}