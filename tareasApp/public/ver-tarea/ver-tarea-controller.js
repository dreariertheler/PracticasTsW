class VerTareaController extends Controller {
	constructor(model,view){
        super(model,view);
    }

    modificar(event) { 
        event.preventDefault(); 
        let params = new URLSearchParams(document.location.search); 
		let id = params.get('id');
        
        router.route(`/tareasApp/modificar?id=`+id); 
    }
}