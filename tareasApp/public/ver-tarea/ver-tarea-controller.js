class VerTareaController extends Controller {
	constructor(model,view){
        super(model,view);
    }

	ver(){   
        let params = new URLSearchParams(this.view.location.search); 
		let id = params.get('id');
		
		let tarea = this.model.verTarea(id);

		if(tarea){
			this.model.verTarea(id);
			document.getElementById('name').innerHTML=`${tarea._titulo}`;
            document.getElementById('descripcion').innerHTML=`${tarea._descripcion}`;	
		}
    }
    modificar(event) { 
        event.preventDefault(); 
        let params = new URLSearchParams(document.location.search); 
		let id = params.get('id');
        
        document.location.href = `modificar-tarea.html?id=${id}`; 
    }
}