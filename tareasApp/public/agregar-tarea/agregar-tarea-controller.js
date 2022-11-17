class AgregarTareaController extends Controller{ 
    constructor(model,view){
        super(model,view);
    }
    
    guardar(event){   
        event.preventDefault(); 
        let titulo = document.getElementById("name").value;
        let descripcion = document.getElementById("descripcion").value;
        let tarea = this.model.agregarTarea(titulo, descripcion); 
        router.route("/tareasApp/ver?id="+tarea._id);
    }
}
